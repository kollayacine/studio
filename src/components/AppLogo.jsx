import { Bot } from 'lucide-react';
import Link from 'next/link';

export default function AppLogo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2 px-2 group">
      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Bot className="h-6 w-6 text-primary" />
      </div>
      <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        BizPilot AI
      </h1>
    </Link>
  );
}
