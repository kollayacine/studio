import { Mail, MessageSquare, ShoppingCart, Users, BarChart3 } from 'lucide-react';

export const automationBlueprints = [
  {
    title: 'Automate Welcome Emails for New Subscribers',
    description: 'Send a personalized welcome email sequence when someone signs up to your newsletter using Mailchimp and Zapier.',
    icon: Mail,
    tools: ['Email Marketing (e.g., Mailchimp)', 'Zapier'],
    difficulty: 'Easy',
    category: 'Email Marketing',
    steps: [
      'Set up your email list in Mailchimp.',
      'Create a welcome email template in Mailchimp.',
      'In Zapier, create a Zap: Trigger on "New Subscriber" in Mailchimp.',
      'Action: "Send Email" via Mailchimp (or your preferred email service if Zapier connects).',
      'Alternatively, use Mailchimp\'s built-in automation for welcome emails.'
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'email automation',
  },
  {
    title: 'Get Notified for New Sales/Leads',
    description: 'Receive real-time notifications (e.g., in Slack or via email) for new sales from your e-commerce store or new leads from a form.',
    icon: ShoppingCart,
    tools: ['E-commerce Platform (e.g., Gumroad, Shopify)', 'Form Tool (e.g., Google Forms, Typeform)', 'Zapier', 'Notification App (e.g., Slack, Email)'],
    difficulty: 'Medium',
    category: 'Sales & Lead Management',
    steps: [
      'Identify the trigger: New sale in Shopify, new Google Form submission, etc.',
      'In Zapier, set up this trigger.',
      'Action: Send a message to a Slack channel, send an email notification, or add to a Google Sheet.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'sales notification',
  },
  {
    title: 'Auto-Post Blog Content to Social Media',
    description: 'Automatically share your new blog posts to your social media channels like Twitter, Facebook, or LinkedIn.',
    icon: MessageSquare,
    tools: ['Blogging Platform (e.g., WordPress, Medium)', 'Zapier', 'Social Media Platforms'],
    difficulty: 'Medium',
    category: 'Content Marketing',
    steps: [
      'Ensure your blog has an RSS feed.',
      'In Zapier, Trigger on "New Item in RSS Feed".',
      'Action: Create a post on Twitter, Facebook Page, LinkedIn, etc., using the blog post title and link.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'social media automation',
  },
  {
    title: 'Sync Customer Data to a CRM or Spreadsheet',
    description: 'Keep your customer information organized by automatically syncing new customers or leads to a simple CRM or Google Sheet.',
    icon: Users,
    tools: ['E-commerce/Lead Form', 'Zapier', 'Google Sheets or Simple CRM (e.g., Notion, Airtable free tier)'],
    difficulty: 'Medium',
    category: 'Customer Management',
    steps: [
      'Trigger: New customer in e-commerce platform or new lead from form.',
      'Action in Zapier: Add a new row in Google Sheets with customer details, or create a new entry in your Notion/Airtable CRM.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'crm sync',
  },
  {
    title: 'Track Social Media Mentions',
    description: 'Get alerts when your brand or specific keywords are mentioned on social media platforms.',
    icon: BarChart3,
    tools: ['Zapier (may require premium app or RSS for some sources)', 'Notification App'],
    difficulty: 'Medium to Hard (depending on source)',
    category: 'Brand Monitoring',
    steps: [
      'Some platforms like Twitter offer triggers in Zapier for mentions.',
      'Alternatively, use Google Alerts to create an RSS feed for mentions and use that as a Zapier trigger.',
      'Action: Send notification to Slack or email.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'social listening',
  }
];
