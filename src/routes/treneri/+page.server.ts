import { sanityClient } from '$lib/sanityClient';

export const load = async () => {
    try {
        const query = `
        *[_type == "trainer"] {
            name,
            "photo": photo.asset->url,
            instagram,
            phone,
            education,
            specialization,
            achievements,
            interests,
            contact
        }`;
        const trainers = await sanityClient.fetch(query);

        return { trainers };
    } catch (error) {
        console.error('Failed to fetch trainers:', error);
        return { trainers: [] };
    }
};