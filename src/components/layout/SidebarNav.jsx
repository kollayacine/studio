'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import AppLogo from '@/components/AppLogo';
import {
  LayoutDashboard,
  Lightbulb,
  PenSquare,
  ListChecks,
  BookOpen,
  Zap,
  Settings2, // Using Settings2 instead of Zap which might be too generic
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/idea-generator', label: 'Idea Generator', icon: Lightbulb },
  { href: '/content-creator', label: 'Content Creator', icon: PenSquare },
  { href: '/progress-tracker', label: 'Progress Tracker', icon: ListChecks },
  { href: '/resource-directory', label: 'Resource Directory', icon: BookOpen },
  { href: '/automation-blueprints', label: 'Automation Blueprints', icon: Settings2 },
];

export default function SidebarNav({ setPageTitle }) {
  const pathname = usePathname();

  const handleNavClick = (label) => {
    if (setPageTitle) {
      setPageTitle(label);
    }
  };
  
  return (
    <>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <AppLogo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: 'right', align: 'center' }}
                  onClick={() => handleNavClick(item.label)}
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
