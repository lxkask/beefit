import type { PageServerLoad } from './$types';
import { sanityClient } from '$lib/sanityClient';
import type { GroupSessionsDocument } from '$lib/types/sanity';

export const load: PageServerLoad = async () => {
    try {
        const query = `
            *[_type == "groupSessions"][0] {
                sessions[] {
                    day,
                    time,
                    title,
                    description
                }
            }
        `;
        
        const groupSessions: GroupSessionsDocument = await sanityClient.fetch(query);

        return {
            groupSessions
        };
    } catch (error) {
        console.error('Failed to fetch group sessions from Sanity:', error);
        return {
            groupSessions: {
                sessions: []
            }
        };
    }
};