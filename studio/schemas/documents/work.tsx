import {defineField} from 'sanity'
import {BsFileImage} from 'react-icons/bs'
import {GROUPS} from '../../constants'
import CustomSlug from '../../components/CustomSlug'
import {validateSlug} from '../../utils/validateSlug'

export default defineField({
  name: 'work',
  type: 'document',
  icon: BsFileImage,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'orderRank',
      type: 'string',
      group: 'content',
      hidden: true,
    }),
    // CONTENT
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Segment URL',
      type: 'slug',
      options: {source: 'name'},
      group: 'content',
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
      components: {
        input: (props) =>
          CustomSlug({
            ...props,
            basePath: '/works',
          }),
      },
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
    select: {
      name: 'name',
      slug: 'slug',
    },
    prepare(selection) {
      const {name, slug} = selection

      return {
        title: name,
        subtitle: `…/works/${slug.current}`,
      }
    },
  },
})
