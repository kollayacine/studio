'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateBusinessIdea } from '@/ai/flows/business-idea-generator'; // AI flow
import IdeaDisplay from './IdeaDisplay';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
  interests: z.string().min(10, { message: "Please describe your interests in at least 10 characters." }).max(500),
  marketTrends: z.string().min(10, { message: "Please describe current market trends in at least 10 characters." }).max(500),
});

export default function IdeaGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [idea, setIdea] = useState(null);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
      marketTrends: '',
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    setIdea(null);
    try {
      const result = await generateBusinessIdea(values);
      setIdea(result);
      toast({
        title: "Idea Generated!",
        description: "Your new business idea is ready.",
      });
    } catch (error) {
      console.error("Error generating business idea:", error);
      toast({
        title: "Error",
        description: "Failed to generate business idea. Please try again.",
        variant: "destructive",
      });
      setIdea(null);
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
              <CardTitle className="text-2xl">Generate Your Next Big Idea</CardTitle>
              <CardDescription>
                Tell us about your passions and what&apos;s trending. We&apos;ll brainstorm some business ideas for you!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests & Skills</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., passionate about sustainable living, skilled in graphic design, enjoy baking..." {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Market Trends</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., rise of e-commerce, demand for personalized products, growing interest in remote work tools..." {...field} rows={4} />
                    </FormControl>
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
                    Generating...
                  </>
                ) : (
                  'Generate Idea'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {idea && (
        <div className="mt-8">
          <IdeaDisplay idea={idea.businessIdea} description={idea.businessIdeaDescription} />
        </div>
      )}
    </div>
  );
}
