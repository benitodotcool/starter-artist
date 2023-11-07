import { groq } from "next-sanity";

const META_FIELDS = groq`
  meta {
    'title': title,
    'description': description,
    'keywords': keywords,
    image {
      'url': asset->url,
      'height': asset->metadata.dimensions.height,
      'width': asset->metadata.dimensions.width,
    }
  }
`;

export const METADATA = groq`
  ${META_FIELDS},
  'root': *[_type == 'settings'][0] {
    ${META_FIELDS}
  }
`;