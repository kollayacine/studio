import IdeaGeneratorForm from '@/components/idea-generator/IdeaGeneratorForm';

export const metadata = {
  title: 'Idea Generator | BizPilot AI',
  description: 'Generate business ideas based on your interests and market trends.',
};

export default function IdeaGeneratorPage() {
  return (
    <div className="container mx-auto py-8">
      <IdeaGeneratorForm />
    </div>
  );
}
