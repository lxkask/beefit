import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'm5f3047g',
  dataset: 'production',
  apiVersion: '2023-01-01',    // Use the most recent API version
  useCdn: true,                // `true` for faster, cached responses; `false` for fresh data
});

export default client;