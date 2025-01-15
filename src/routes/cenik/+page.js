import { sanityClient } from '$lib/sanityClient';

export async function load() {
    console.log("Load function is running..."); // Debug log
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
        console.log("Query:", query);
        console.log("Fetched priceTable:", priceTable);
        // Ověření struktury dat
        if (priceTable && priceTable.rows) {
            console.log("Price table rows:", priceTable.rows);
        }
        return { priceTable };
    } catch (error) {
        console.error("Error in load function:", error);
        throw error;
    }
}

