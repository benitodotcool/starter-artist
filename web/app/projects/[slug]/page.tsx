import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { TWork } from "@/types";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const slug = params.slug;

  const data = await sanityFetch<TWork>({
    query: QUERY,
    params: { slug: slug },
  });

  if (!data) {
    notFound();
  }

  return (
    <section>
      <h1 className="my-10">{data.name}</h1>
      <p>{data.slug}</p>
    </section>
  );
}

const QUERY = groq`
  *[_type == 'work' && slug.current == $slug][0] {
    name,
    'slug': '/projects/' + slug.current
  }
`;
