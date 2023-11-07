import type { Metadata } from "next";
import { groq } from "next-sanity";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { sanityFetch } from "@/lib/sanity";
import handleMetadata from "@/lib/metadata";
import GlobalContextProvider from "../contexts/GlobalContext";
import { Analytics } from "@/components/Analytics";
import { META_LOCALE } from "@/constants";
import { METADATA } from "@/fragments/metadata";
import { TMetadata } from "@/types";
import "../assets/styles/_tailwind.css";
import "../assets/styles/_reset.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<TMetadata>({
    query: META_QUERY,
  });
  // TODO: Debug error
  // @ts-expect-error
  return handleMetadata(data, "/");
}

const META_QUERY = groq`
  *[_type == 'home'][0] {
    ${METADATA}
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={META_LOCALE}>
      <body
        suppressHydrationWarning={true}
        className={clsx(inter.className, "bg-neutral-300 typo-xs")}
      >
        <GlobalContextProvider>
          <main>{children}</main>
        </GlobalContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
