import ProgressTrackerClient from '@/components/progress-tracker/ProgressTrackerClient';

export const metadata = {
  title: 'Progress Tracker | BizPilot AI',
  description: 'Track your business creation progress step-by-step.',
};

export default function ProgressTrackerPage() {
  return (
    <div className="container mx-auto py-8">
      <ProgressTrackerClient />
    </div>
  );
}
