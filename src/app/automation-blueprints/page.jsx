
import { automationBlueprints } from '@/data/automationBlueprints';
import BlueprintCard from '@/components/automation-blueprints/BlueprintCard';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Automation Blueprints | SmallBus AI',
  description: 'Discover automation recipes to streamline your small business operations.',
};

export default function AutomationBlueprintsPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl">Automation Blueprints</CardTitle>
          <CardDescription className="text-lg">
            Save time and effort by automating repetitive tasks. Here are some ideas to get you started using various automation tools and platform features.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {automationBlueprints.map((blueprint, index) => (
          <BlueprintCard key={index} blueprint={blueprint} />
        ))}
      </div>
    </div>
  );
}
