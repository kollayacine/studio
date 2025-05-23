
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function BlueprintCard({ blueprint }) {
  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Image 
        src={blueprint.image} 
        alt={blueprint.title} 
        width={600} 
        height={300} 
        className="w-full h-48 object-cover"
        data-ai-hint={blueprint.imageHint}
      />
      <CardHeader>
        <div className="flex items-start gap-3 mb-2">
          {blueprint.icon && <blueprint.icon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />}
          <CardTitle className="text-xl">{blueprint.title}</CardTitle>
        </div>
        <CardDescription>{blueprint.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div>
          <h4 className="font-semibold text-sm mb-1">Tools:</h4>
          <div className="flex flex-wrap gap-1">
            {blueprint.tools.map((tool) => (
              <Badge key={tool} variant="outline">{tool}</Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-sm">
            <Badge variant={blueprint.difficulty === 'Easy' ? 'default' : blueprint.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                   className={blueprint.difficulty === 'Easy' ? 'bg-green-500 hover:bg-green-600 text-white' : blueprint.difficulty === 'Medium' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-red-500 hover:bg-red-600 text-white'}>
              Difficulty: {blueprint.difficulty}
            </Badge>
            <Badge variant="secondary">{blueprint.category}</Badge>
        </div>
         {blueprint.steps && blueprint.steps.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="steps">
              <AccordionTrigger className="text-sm font-medium">View Setup Steps</AccordionTrigger>
              <AccordionContent>
                <ul className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                  {blueprint.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
      {/* Footer removed as it contained Zapier specific button 
      <CardFooter>
        <Button asChild variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer">
            Explore on Zapier <Zap className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
      */}
    </Card>
  );
}
