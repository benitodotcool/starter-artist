import {defineField, defineType} from 'sanity'
import CustomInput from '../../components/CustomInput'

export default defineType({
  name: 'metaCard',
  type: 'object',
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'title',
      title: 'Titre pour le SEO et le partage sur les réseaux sociaux',
      type: 'string',
      validation: (Rule) => Rule.required(),
      components: {
        input: (props) =>
          CustomInput({
            ...props,
            maxLength: 70,
            tone: 'critical',
            description: (
              <>
                📌 Rendez-le aussi attractif que possible pour convertir les utilisateurs sur les
                réseaux sociaux et les recherches Google. Idéalement entre 15 et 70 caractères.
              </>
            ),
          }),
      },
    }),
    defineField({
      name: 'description',
      title: 'Courte description pour le SEO et le partage sur les réseaux sociaux',
      type: 'text',
      rows: 3,
      components: {
        input: (props) =>
          CustomInput({
            ...props,
            maxLength: 160,
            tone: 'caution',
            description: (
              <>
                ⚡ Facultatif, mais fortement recommandé pour convertir davantage de visiteurs en
                provenance de Google et des réseaux sociaux. Idéalement entre 70 et 160 caractères.
              </>
            ),
          }),
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Série de mots-clés pertinents liés au contenu de la page',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      components: {
        input: (props: any) =>
          CustomInput({
            ...props,
            maxLength: 10,
            tone: 'caution',
            description: (
              <>
                ⚡ Les mots-clés sont des termes ou expressions spécifiques utilisés pour décrire le
                contenu d'une page web, facilitant les utilisateurs en quête d'informations
                pertinentes. Facultatifs, mais fortement recommandé pour améliorer la visibilité de
                la page web dans les résultats de recherche. Idéalement entre 5 et 10.
              </>
            ),
          }),
      },
    }),
    defineField({
      name: 'image',
      title: 'Image de partage sur les réseaux sociaux',
      type: 'image',
      options: {accept: '.webp, .jpg, .jpeg, .png'},
      components: {
        input: (props: any) =>
          CustomInput({
            ...props,
            badges: [
              {label: 'Facultatif', tone: 'caution'},
              {label: 'jpg'},
              {label: 'jpeg'},
              {label: 'png'},
              {label: 'webp'},
            ],
            description: (
              <>
                ⚡ Facultatif, mais fortement recommandé pour augmenter les taux de conversion des
                liens vers cette page lorqu'elle est partagée sur les réseaux sociaux, e-mails,
                messages, etc. Format idéal: 1200×630 pixels.
              </>
            ),
          }),
      },
    }),
  ],
})
