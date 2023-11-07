import { TMetadata } from "@/types";
import {
  META_LOCALE,
  META_SEPARATOR,
  META_URL,
  META_COLOR_SCHEME,
} from "@/constants";

export default function handleMetadata(data: TMetadata, slug: string) {
  const meta = data.meta;
  const rootMeta = data.root.meta;

  return {
    title: `${meta.title}${META_SEPARATOR}${rootMeta.title}`,
    description:
      meta.description !== null ? meta.description : rootMeta.description,
    openGraph: {
      title: meta.title,
      description:
        meta.description !== null ? meta.description : rootMeta.description,
      // TODO
      images: [
        {
          url: rootMeta.image.url,
          height: rootMeta.image.height,
          width: rootMeta.image.width,
        },
      ],
      siteName: rootMeta.title,
      url: `${META_URL}${slug}`,
      locale: META_LOCALE,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    keywords: meta.keywords !== null ? meta.keywords : rootMeta.keywords,
    colorScheme: META_COLOR_SCHEME,
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}
