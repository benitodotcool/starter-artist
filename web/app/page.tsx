import { groq } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { THome } from "@/types";

export default async function Page() {
  const data = await sanityFetch<THome>({
    query: QUERY,
  });

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1>{data.title}</h1>
    </div>
  )
}

const QUERY = groq`
  *[_type == 'home'][0] {
    title,
  }
`;

