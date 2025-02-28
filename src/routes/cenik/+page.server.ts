import { sanityClient } from '$lib/sanityClient';

export const load = async () => {
    try {
        const query = `
            {
                "priceTable": *[_type == "priceTable"][0] {
                    title,
                    rows[] {
                        type,
                        allDay,
                        workingHours,
                        eveningWeekend
                    }
                },
                "paymentMethods": *[_type == "paymentMethods"][0] {
                    methods
                }
            }
        `;
        const data = await sanityClient.fetch(query);

        return data;
    } catch (error) {
        console.error('Failed to fetch data from Sanity:', error);
        return {
            priceTable: null,
            paymentMethods: null,
        };
    }
};
