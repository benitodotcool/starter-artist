import {defineField} from 'sanity'
import {BsHouse} from 'react-icons/bs'
import {GROUPS} from '../../constants'

export default defineField({
  name: 'home',
  type: 'document',
  icon: BsHouse,
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
        title: 'Accueil',
      }
    },
  },
})
