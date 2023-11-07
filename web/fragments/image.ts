import { groq } from "next-sanity";

export const IMAGE = groq`
  'url': asset->url,
  'altText': asset->altText,
  'height': asset->metadata.dimensions.height,
  'width': asset->metadata.dimensions.width,
  'aspectRatio': asset->metadata.dimensions.aspectRatio,
  'blurDataURL': asset->metadata.lqip,
  'dominant': asset->metadata.palette.dominant,
`;
