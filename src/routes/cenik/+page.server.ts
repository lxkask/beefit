import { sanityClient } from '$lib/sanityClient';

export const load = async () => {
  try {
    const query = `
      *[_type == "priceTable"][0] {
        title,
        rows[] {
          type,
          allDay,
          workingHours,
          eveningWeekend
        }
      }
    `;
    const priceTable = await sanityClient.fetch(query);

    return {
      priceTable,
    };
  } catch (error) {
    console.error('Failed to fetch data from Sanity:', error);
    return {
      priceTable: null,
    };
  }
};
