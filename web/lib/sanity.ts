import { createClient } from "next-sanity";
import type { QueryParams } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const DEFAULT_PARAMS = {} as QueryParams;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
}: {
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate: 10 },
  });
}

export const builder = imageUrlBuilder(client);
