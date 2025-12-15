import { sanityClient } from '$lib/sanityClient';
import { browser } from '$app/environment';

/**
 * Centralized Sanity data fetching utility with error handling
 * @param query - GROQ query string
 * @param params - Optional query parameters
 * @returns Promise with data or null on error
 */
export async function fetchSanityData<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  try {
    const result = await sanityClient.fetch<T>(query, params);
    return result;
  } catch (error) {
    // Only log errors in development mode
    if (browser && import.meta.env.DEV) {
      console.error('Chyba při načítání dat ze Sanity:', error);
      console.error('Query:', query);
      if (params) console.error('Params:', params);
    }

    // In production, you might want to send errors to a logging service
    // Example: sendToSentry(error);

    return null;
  }
}

/**
 * Fetch Sanity data with loading state management
 * @param query - GROQ query string
 * @param params - Optional query parameters
 * @returns Promise with { data, error }
 */
export async function fetchSanityDataWithState<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<{ data: T | null; error: Error | null }> {
  try {
    const result = await sanityClient.fetch<T>(query, params);
    return { data: result, error: null };
  } catch (error) {
    if (browser && import.meta.env.DEV) {
      console.error('Chyba při načítání dat ze Sanity:', error);
    }

    return {
      data: null,
      error: error instanceof Error ? error : new Error('Unknown error')
    };
  }
}
