'use server';

/**
 * @fileOverview Business idea generator AI agent.
 *
 * - generateBusinessIdea - A function that generates business ideas.
 * - BusinessIdeaInput - The input type for the generateBusinessIdea function.
 * - BusinessIdeaOutput - The return type for the generateBusinessIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BusinessIdeaInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the users interests, which should be used as a basis for generating business ideas.'),
  marketTrends: z
    .string()
    .describe('A description of current market trends, which should be used as a basis for generating business ideas.'),
});
export type BusinessIdeaInput = z.infer<typeof BusinessIdeaInputSchema>;

const BusinessIdeaOutputSchema = z.object({
  businessIdea: z
    .string()
    .describe('A business idea based on the users interests and current market trends.'),
  businessIdeaDescription: z
    .string()
    .describe('A description of the business idea, including potential revenue streams and target market.'),
});
export type BusinessIdeaOutput = z.infer<typeof BusinessIdeaOutputSchema>;

export async function generateBusinessIdea(input: BusinessIdeaInput): Promise<BusinessIdeaOutput> {
  return businessIdeaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'businessIdeaPrompt',
  input: {schema: BusinessIdeaInputSchema},
  output: {schema: BusinessIdeaOutputSchema},
  prompt: `You are a business consultant specializing in generating business ideas for aspiring entrepreneurs.

You will use the users interests and current market trends to generate a business idea that is both viable and interesting to the user.

User Interests: {{{interests}}}
Market Trends: {{{marketTrends}}}

Generate a business idea based on the users interests and current market trends. Include a description of the business idea, including potential revenue streams and target market.
`,
});

const businessIdeaFlow = ai.defineFlow(
  {
    name: 'businessIdeaFlow',
    inputSchema: BusinessIdeaInputSchema,
    outputSchema: BusinessIdeaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
