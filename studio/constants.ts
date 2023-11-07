import {BsCardHeading, BsImages, BsSpeedometer2} from 'react-icons/bs'

export const BASE_URL = 'https://starter.urxbn.com'

export const GROUPS = [
  {
    default: true,
    name: 'content',
    title: 'Contenu éditorial',
    icon: BsCardHeading,
  },
  {
    name: 'iconography',
    title: 'Image(s)',
    icon: BsImages,
  },
  {
    name: 'seo',
    title: 'SEO & Réseaux sociaux',
    icon: BsSpeedometer2,
  },
]