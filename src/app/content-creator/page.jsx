import ContentCreatorForm from '@/components/content-creator/ContentCreatorForm';

export const metadata = {
  title: 'Content Creator | BizPilot AI',
  description: 'Generate product descriptions and social media posts with AI.',
};

export default function ContentCreatorPage() {
  return (
    <div className="container mx-auto py-8">
      <ContentCreatorForm />
    </div>
  );
}
