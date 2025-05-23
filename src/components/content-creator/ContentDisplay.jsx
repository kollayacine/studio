'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PenSquare, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

export default function ContentDisplay({ content }) {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
      .then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "The generated content has been copied.",
        });
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
        toast({
          title: "Copy Failed",
          description: "Could not copy content to clipboard.",
          variant: "destructive",
        });
      });
  };
  
  return (
    <Card className="shadow-xl border-accent border-2 animate-fadeIn max-w-2xl mx-auto">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      <CardHeader className="bg-accent/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PenSquare className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl text-accent">Generated Content</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy content">
            <Copy className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <pre className="whitespace-pre-wrap text-sm text-foreground bg-muted/50 p-4 rounded-md font-sans">{content}</pre>
      </CardContent>
    </Card>
  );
}
