'use client';

import { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import SidebarNav from '@/components/layout/SidebarNav';
import PageHeader from '@/components/layout/PageHeader';

export default function AppLayout({ children }) {
  const [pageTitle, setPageTitle] = useState('Dashboard');

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar side="left" variant="sidebar" collapsible="icon" className="border-r">
        <SidebarNav setPageTitle={setPageTitle} />
      </Sidebar>
      <SidebarInset>
        <PageHeader title={pageTitle} />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
