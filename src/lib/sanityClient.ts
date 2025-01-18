import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'm5f3047g', // nahraď svým Project ID
  dataset: 'production', // nahraď datasetem (např. "production")
  apiVersion: '2023-01-01', // nebo tvá zvolená verze
  useCdn: true, // zapni CDN pro rychlejší data, pokud nepotřebuješ preview
});