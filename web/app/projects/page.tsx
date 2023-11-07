import Link from "next/link";
import { groq } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { TWorks } from "@/types";

export default async function Page() {
  const data = await sanityFetch<TWorks>({
    query: QUERY,
  });

  const works = data.projects

  return (
    <section>
      <h1 className="my-10">{data.title}</h1>
      <ul className="mb-10">
        {works.map((work) => (
          <li key={work._key} className="link">
            <Link href={work.slug}>{work.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const QUERY = groq`
  *[_type == 'baseWork'][0] {
    title,
    'projects': *[_type == 'work'] {
      _key,
      name,
      'slug': '/projects/' + slug.current
    }
  }
`;
