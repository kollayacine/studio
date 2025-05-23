'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';

export default function PageHeader({ title }) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
    </header>
  );
}
