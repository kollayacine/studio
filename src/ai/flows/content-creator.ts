// Content creation flow to generate product descriptions and social media posts.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentCreatorInputSchema = z.object({
  type: z
    .enum(['productDescription', 'socialMediaPost'])
    .describe('The type of content to generate.'),
  topic: z.string().describe('The topic of the content.'),
  keywords: z
    .string()
    .describe(
      'A comma separated list of keywords to include in the content. e.g. sustainable, eco-friendly, organic'
    ),
  targetAudience: z.string().describe('Who is the target audience for this content?'),
  tone: z
    .enum(['formal', 'informal', 'humorous', 'professional'])
    .describe('The tone of the content.'),
});
export type ContentCreatorInput = z.infer<typeof ContentCreatorInputSchema>;

const ContentCreatorOutputSchema = z.object({
  content: z.string().describe('The generated content.'),
});
export type ContentCreatorOutput = z.infer<typeof ContentCreatorOutputSchema>;

export async function contentCreator(input: ContentCreatorInput): Promise<ContentCreatorOutput> {
  return contentCreatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentCreatorPrompt',
  input: {schema: ContentCreatorInputSchema},
  output: {schema: ContentCreatorOutputSchema},
  prompt: `You are a content creator expert.

  You will generate content based on the following instructions:

  Content Type: {{{type}}}
  Topic: {{{topic}}}
  Keywords: {{{keywords}}}
  Target Audience: {{{targetAudience}}}
  Tone: {{{tone}}}

  Content:`,
});

const contentCreatorFlow = ai.defineFlow(
  {
    name: 'contentCreatorFlow',
    inputSchema: ContentCreatorInputSchema,
    outputSchema: ContentCreatorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
