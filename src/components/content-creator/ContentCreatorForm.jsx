'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { contentCreator } from '@/ai/flows/content-creator'; // AI flow
import ContentDisplay from './ContentDisplay';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  type: z.enum(['productDescription', 'socialMediaPost'], { required_error: "Content type is required." }),
  topic: z.string().min(5, { message: "Topic must be at least 5 characters." }).max(200),
  keywords: z.string().min(3, { message: "Keywords must be at least 3 characters." }).max(200),
  targetAudience: z.string().min(5, { message: "Target audience must be at least 5 characters." }).max(200),
  tone: z.enum(['formal', 'informal', 'humorous', 'professional'], { required_error: "Tone is required." }),
});

export default function ContentCreatorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'productDescription',
      topic: '',
      keywords: '',
      targetAudience: '',
      tone: 'professional',
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    setContent(null);
    try {
      const result = await contentCreator(values);
      setContent(result.content);
      toast({
        title: "Content Generated!",
        description: "Your new content is ready.",
      });
    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        title: "Error",
        description: "Failed to generate content. Please try again.",
        variant: "destructive",
      });
      setContent(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="text-2xl">Create Engaging Content</CardTitle>
              <CardDescription>
                Let AI help you craft product descriptions or social media posts. Fill in the details below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="productDescription">Product Description</SelectItem>
                        <SelectItem value="socialMediaPost">Social Media Post</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic / Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Eco-friendly water bottle, New summer collection" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., sustainable, reusable, stylish" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., millennials, eco-conscious shoppers, tech enthusiasts" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tone of Voice</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="informal">Informal</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Content...
                  </>
                ) : (
                  'Generate Content'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {content && (
        <div className="mt-8">
          <ContentDisplay content={content} />
        </div>
      )}
    </div>
  );
}
