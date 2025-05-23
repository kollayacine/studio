import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function IdeaDisplay({ idea, description }) {
  return (
    <Card className="shadow-xl border-primary border-2 animate-fadeIn max-w-2xl mx-auto">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      <CardHeader className="bg-primary/10">
        <div className="flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl text-primary">Your Business Idea!</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{idea}</h3>
          <p className="text-muted-foreground whitespace-pre-line">{description}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground">Potential Revenue Streams:</h4>
          <p className="text-sm text-muted-foreground">
            (Considered based on the idea - e.g., direct sales, subscriptions, services, advertising)
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Target Market:</h4>
          <p className="text-sm text-muted-foreground">
            (Identified based on the idea - e.g., eco-conscious consumers, small businesses, remote workers)
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
