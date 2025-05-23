
import { Mail, MessageSquare, ShoppingCart, Users, BarChart3 } from 'lucide-react';

export const automationBlueprints = [
  {
    title: 'Automate Welcome Emails for New Subscribers',
    description: "Send a personalized welcome email sequence when someone signs up to your newsletter using an email marketing platform's automation features.",
    icon: Mail,
    tools: ['Email Marketing Platform (e.g., Mailchimp)'],
    difficulty: 'Easy',
    category: 'Email Marketing',
    steps: [
      'Set up your email list in your chosen email marketing platform.',
      'Create a welcome email template.',
      'Use the platform\'s built-in automation features to trigger the email on new sign-ups.',
      'Test the automation thoroughly.'
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'email automation',
  },
  {
    title: 'Get Notified for New Sales/Leads',
    description: 'Receive real-time notifications (e.g., in Slack or via email) for new sales from your e-commerce store or new leads from a form using platform integrations.',
    icon: ShoppingCart,
    tools: ['E-commerce Platform (e.g., Gumroad, Shopify)', 'Form Tool (e.g., Google Forms, Typeform)', 'Notification App (e.g., Slack, Email)', 'Integration Tools'],
    difficulty: 'Medium',
    category: 'Sales & Lead Management',
    steps: [
      'Identify the trigger: New sale in your e-commerce platform, new form submission, etc.',
      'Explore your platform\'s native notification settings or integration options.',
      'Connect to your preferred notification app (Slack, Email).',
      'Configure the notification content and recipients.'
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'sales notification',
  },
  {
    title: 'Auto-Post Blog Content to Social Media',
    description: 'Automatically share your new blog posts to your social media channels using scheduling tools or platform integrations.',
    icon: MessageSquare,
    tools: ['Blogging Platform (e.g., WordPress, Medium)', 'Social Media Schedulers (e.g., Buffer)', 'Social Media Platforms'],
    difficulty: 'Medium',
    category: 'Content Marketing',
    steps: [
      'Ensure your blog has an RSS feed or your blogging platform supports integrations.',
      'Use a social media scheduling tool that can connect to RSS feeds or your blog.',
      'Configure the tool to automatically fetch new posts and share them.',
      'Customize post templates for each social media platform.'
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'social media automation',
  },
  {
    title: 'Sync Customer Data to a CRM or Spreadsheet',
    description: 'Keep your customer information organized by automatically syncing new customers or leads to a simple CRM or Google Sheet using available integrations.',
    icon: Users,
    tools: ['E-commerce/Lead Form', 'Google Sheets or Simple CRM (e.g., Notion, Airtable free tier)', 'Integration Tools'],
    difficulty: 'Medium',
    category: 'Customer Management',
    steps: [
      'Identify the source of customer data (e.g., e-commerce platform, form submissions).',
      'Choose your destination (Google Sheets, Notion, Airtable).',
      'Explore if your source platform has direct integrations with your chosen destination.',
      'If not, look for third-party integration tools that support both platforms.'
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'crm sync',
  },
  {
    title: 'Track Social Media Mentions',
    description: 'Get alerts when your brand or specific keywords are mentioned on social media using monitoring tools or RSS feeds from alert services.',
    icon: BarChart3,
    tools: ['Social Media Monitoring Tools', 'Google Alerts (for RSS)', 'Notification App'],
    difficulty: 'Medium',
    category: 'Brand Monitoring',
    steps: [
      'Set up Google Alerts for your brand name and relevant keywords, choosing the "RSS feed" delivery option.',
      'Use an RSS reader or an integration tool that can read RSS feeds to get notifications.',
      'Alternatively, explore dedicated social media monitoring tools for more comprehensive tracking.',
      'Configure notifications to be sent to your email or team messaging app.'
    ],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'social listening',
  }
];
