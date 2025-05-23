
import { Palette, BarChart3, Users, Mail, Zap, Type, Image as ImageIcon, BrainCircuit } from 'lucide-react';

export const resourceCategories = [
  {
    name: 'Design & Branding',
    icon: Palette,
    resources: [
      { name: 'Canva', description: 'User-friendly graphic design tool for logos, social media posts, and more.', link: 'https://www.canva.com/', tags: ['design', 'free tier'] },
      { name: 'Coolors', description: 'Fast color schemes generator.', link: 'https://coolors.co/', tags: ['color', 'branding', 'free'] },
      { name: 'Remove.bg', description: 'Remove image backgrounds automatically.', link: 'https://www.remove.bg/', tags: ['image editing', 'free'] },
    ],
  },
  {
    name: 'Marketing & Analytics',
    icon: BarChart3,
    resources: [
      { name: 'Mailchimp', description: 'Email marketing platform with a generous free tier.', link: 'https://mailchimp.com/', tags: ['email', 'marketing', 'free tier'] },
      { name: 'Google Analytics', description: 'Track website traffic and user behavior.', link: 'https://analytics.google.com/', tags: ['analytics', 'free'] },
      { name: 'Buffer', description: 'Social media management tool with a free plan for basic scheduling.', link: 'https://buffer.com/', tags: ['social media', 'free tier'] },
    ],
  },
  {
    name: 'Productivity & Organization',
    icon: Users,
    resources: [
      { name: 'Notion', description: 'All-in-one workspace for notes, tasks, wikis, and databases.', link: 'https://www.notion.so/', tags: ['productivity', 'organization', 'free tier'] },
      { name: 'Trello', description: 'Kanban-style project management tool.', link: 'https://trello.com/', tags: ['project management', 'free tier'] },
      { name: 'Google Workspace', description: 'Suite of free tools like Docs, Sheets, Drive.', link: 'https://workspace.google.com/', tags: ['collaboration', 'free'] },
    ],
  },
  {
    name: 'AI Tools',
    icon: BrainCircuit,
    resources: [
      { name: 'ChatGPT', description: 'Powerful AI language model for content creation, brainstorming, and more.', link: 'https://chat.openai.com/', tags: ['ai', 'writing', 'free tier'] },
      { name: 'Jasper (Free Trial)', description: 'AI writing assistant for various content types.', link: 'https://www.jasper.ai/', tags: ['ai', 'writing', 'trial'] },
      { name: 'Copy.ai (Free Plan)', description: 'AI-powered copywriting tool.', link: 'https://www.copy.ai/', tags: ['ai', 'copywriting', 'free plan'] },
    ]
  },
  {
    name: 'Automation',
    icon: Zap, // Retaining Zap icon as it generally represents automation
    resources: [
      // { name: 'Zapier', description: 'Connect your apps and automate workflows. Free tier available.', link: 'https://zapier.com/', tags: ['automation', 'integration', 'free tier'] }, // Removed Zapier
      { name: 'IFTTT', description: 'Simple automation tool for connecting various services.', link: 'https://ifttt.com/', tags: ['automation', 'free'] },
      // Consider adding other Zapier alternatives if known, or platform-specific automation links
    ],
  }
];
