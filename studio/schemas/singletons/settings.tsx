import {defineField} from 'sanity'
import {BsGear} from 'react-icons/bs'
import {GROUPS} from '../../constants'

export default defineField({
  name: 'settings',
  type: 'document',
  icon: BsGear,
  groups: GROUPS,
  fields: [
    // CONTENT
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
    }),
    // SEO
    defineField({
      name: 'meta',
      title: 'SEO & Réseaux sociaux',
      type: 'globalMetaCard',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Réglages',
      }
    },
  },
})
