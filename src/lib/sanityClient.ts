import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'm5f3047g',
  dataset: 'production',
  apiVersion: '2025-01-18',
  useCdn: false,
});