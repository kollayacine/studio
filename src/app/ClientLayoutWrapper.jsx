'use client'; // This component handles client-side layout concerns

import AppLayout from '@/components/layout/AppLayout';
import { Toaster } from "@/components/ui/toaster";

// You can also include other client-side providers here if needed in the future

export default function ClientLayoutWrapper({ children }) {
  return (
    <>
      <AppLayout>
        {children}
      </AppLayout>
      <Toaster />
    </>
  );
}
