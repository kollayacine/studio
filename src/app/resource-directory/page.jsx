import { resourceCategories } from '@/data/resources';
import ResourceCard from '@/components/resource-directory/ResourceCard';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Resource Directory | BizPilot AI',
  description: 'Curated list of free tools and resources for small businesses.',
};

export default function ResourceDirectoryPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl">Resource Directory</CardTitle>
          <CardDescription className="text-lg">
            Discover free tools and resources to help you build, manage, and grow your small business.
          </CardDescription>
        </CardHeader>
      </Card>

      {resourceCategories.map((category) => (
        <section key={category.name} className="space-y-4">
          <div className="flex items-center gap-3">
            {category.icon && <category.icon className="h-8 w-8 text-primary" />}
            <h2 className="text-2xl font-semibold text-foreground">{category.name}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.resources.map((resource) => (
              <ResourceCard key={resource.name} resource={resource} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
