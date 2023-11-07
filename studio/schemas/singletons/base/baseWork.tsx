import {defineField} from 'sanity'
import {BsFileEarmark} from 'react-icons/bs'
import {GROUPS} from '../../../constants'

export default defineField({
  name: 'baseWork',
  type: 'document',
  icon: BsFileEarmark,
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
      type: 'metaCard',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projets',
      }
    },
  },
})
