
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, PenSquare, ListChecks, BookOpen, ArrowRight } from 'lucide-react';
// Removed Image import

const features = [
  {
    title: 'Idea Generator',
    description: 'Spark your next big idea with AI-powered suggestions based on your interests and market trends.',
    icon: Lightbulb,
    href: '/idea-generator',
    // image: 'https://placehold.co/600x400.png', // Removed
    // imageHint: 'innovation lightbulb', // Removed
  },
  {
    title: 'Content Creator',
    description: 'Generate compelling product descriptions and social media posts effortlessly with AI.',
    icon: PenSquare,
    href: '/content-creator',
    // image: 'https://placehold.co/600x400.png', // Removed
    // imageHint: 'writing content', // Removed
  },
  {
    title: 'Progress Tracker',
    description: 'Stay on track with a guided checklist for your business journey. Celebrate milestones!',
    icon: ListChecks,
    href: '/progress-tracker',
    // image: 'https://placehold.co/600x400.png', // Removed
    // imageHint: 'checklist progress', // Removed
  },
  {
    title: 'Resource Directory',
    description: 'Access a curated list of free tools and resources to help you build and grow your business.',
    icon: BookOpen,
    href: '/resource-directory',
    // image: 'https://placehold.co/600x400.png', // Removed
    // imageHint: 'library books', // Removed
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to SmallBus AI!</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Your smart assistant for launching and growing your digital business. Let&apos;s get started!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>SmallBus AI provides you with AI-powered tools, step-by-step guidance, and curated resources to turn your entrepreneurial dreams into reality. Explore the features below to begin your journey.</p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Image rendering removed
            <Image 
              src={feature.image} 
              alt={feature.title} 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
              data-ai-hint={feature.imageHint}
            />
            */}
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <feature.icon className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4"> {/* Added pt-4 for spacing after removing image */}
              <Link href={feature.href} passHref>
                <Button className="w-full" variant="default">
                  Go to {feature.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
