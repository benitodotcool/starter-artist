// ! META ! //
export type TMetadata = {
  meta: TMetaFields;
  root: {
    meta: TRootMetaFields;
  };
};
type TMetaFields = {
  title: string;
  description: string | null;
  keywords: string[] | null;
  image: TImage | null;
};
type TRootMetaFields = {
  title: string;
  description: string;
  keywords: string[];
  image: TImage;
};

// ! IMAGE ! //
export type TImage = {
  url: string;
  altText: string | null;
  height: number;
  width: number;
  aspectRatio: number;
  blurDataURL: string;
  dominant: {
    _type: string;
    background: string;
    foreground: string;
    population: number;
    title: string;
  };
};

// ! PAGES ! //
export type THome = {
  title: string;
  x: TImage;
}

export type TWorks = {
  title: string;
  projects: TWork[]
}

export type TWork = {
  _key?: string;
  name: string;
  slug: string;
}
