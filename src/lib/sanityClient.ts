import { createClient } from 'picosanity';

console.log('Inicializuji Sanity client...');

export const sanityClient = createClient({
  projectId: 'm5f3047g',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

console.log('Sanity client vytvořen:', sanityClient);