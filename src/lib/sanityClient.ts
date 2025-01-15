import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'm5f3047g', // Replace with your project ID
  dataset: 'production',        // Replace with your dataset (usually 'production')
  useCdn: true,                 // Enable CDN for faster response
  apiVersion: '2023-01-01',     // Use the latest API version
});