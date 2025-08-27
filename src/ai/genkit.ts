
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

if (!process.env.GOOGLE_API_KEY) {
  const errorMessage = "CRITICAL: GOOGLE_API_KEY is not set in environment variables. Genkit Google AI plugin cannot be initialized. Please set this in your .env file.";
  console.error(errorMessage);
  throw new Error(errorMessage);
}

export const ai = genkit({
  plugins: [googleAI(
    { apiKey: process.env.GOOGLE_API_KEY }
  )],
  // Updated to a valid and current model.
  // Ensure GOOGLE_API_KEY is set in your environment variables.
  model: 'googleai/gemini-2.5-flash-lite',
});
