import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "m5f3047g",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: false,
});

export async function load() {
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
  console.log("Returning priceTable from load:", priceTable); // Debug log
  return { priceTable };
}

  

