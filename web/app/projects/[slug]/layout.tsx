import { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import handleMetadata from "@/lib/metadata";
import type { TMetadata } from "@/types";
import { METADATA } from "@/fragments/metadata";

type Props = {
  params: {
    slug: string;
  };
  children: ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const data = await sanityFetch<TMetadata>({
    query: META_QUERY,
    params: { slug: slug },
  });

  if (!data) {
    notFound();
  }

  // TODO: Debug error
  // @ts-expect-error
  return handleMetadata(data, `/works/${slug}`);
}

const META_QUERY = groq`
  *[_type == 'work' && slug.current == $slug][0] {
    ${METADATA}
  }
`;

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
