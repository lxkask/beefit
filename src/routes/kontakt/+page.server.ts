import { sanityClient } from '$lib/sanityClient';
import type { HiringDocument } from '$lib/types/sanity';

export const load = async () => {
    const hiring = await sanityClient.fetch<HiringDocument>(`
        *[_type == "hiring"][0] {
        active,
        title,
        description,
        formLink,
        buttonText
        }
    `);

    return { hiring };
};