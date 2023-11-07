import { ReactNode } from "react";
import type { Metadata } from "next";
import { groq } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import handleMetadata from "@/lib/metadata";
import type { TMetadata } from "@/types";
import { METADATA } from "@/fragments/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<TMetadata>({
    query: META_QUERY,
  });
  // TODO: Debug error
  // @ts-expect-error
  return handleMetadata(data, "/projects");
}

const META_QUERY = groq`
  *[_type == 'baseWork'][0] {
    ${METADATA}
  }
`;

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
