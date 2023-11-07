import {defineField, defineType} from 'sanity'
import CustomInput from '../../components/CustomInput'

export default defineType({
  name: 'globalMetaCard',
  type: 'object',
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'title',
      title: "Titre template pour le SEO, le partage sur les réseaux sociaux et l'historique",
      type: 'string',
      validation: (Rule) => Rule.required(),
      components: {
        input: (props) =>
          CustomInput({
            ...props,
            badges: [{label: 'Obligatoire', tone: 'critical'}],
            description: (
              <>
                📌 Le titre template est très souvent le nom de la marque, du studio, de l'artiste,
                de la galerie, etc. Il sert à donner du contexte et à convertir les utilisateurs
                sur les réseaux sociaux et les recherches Google. Ce titre sera combiné avec le
                titre pour le SEO de chaque page.
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
      validation: (Rule) => Rule.required(),
      components: {
        input: (props) =>
          CustomInput({
            ...props,
            tone: 'critical',
            maxLength: 160,
            description: (
              <>
                📌 Obligatoire pour convertir davantage de visiteurs en provenance de Google et des
                réseaux sociaux. Cette description sera utilisée si la page consultée n'en contient
                pas. Idéalement entre 70 et 160 caractères.
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
      validation: (Rule) => Rule.required(),
      components: {
        input: (props: any) =>
          CustomInput({
            ...props,
            tone: 'critical',
            maxLength: 10,
            description: (
              <>
                📌 Les mots-clés sont des termes ou expressions spécifiques utilisés pour décrire le
                contenu d'une page web, facilitant les utilisateurs en quête d'informations
                pertinentes. Obligatoire pour améliorer la visibilité de la page web dans les
                résultats de recherche. Ces mots-clés seront utilisés si la page consultée n'en
                contient pas. Idéalement entre 5 et 10.
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
      validation: (Rule) => Rule.required(),
      components: {
        input: (props: any) =>
          CustomInput({
            ...props,
            badges: [
              {label: 'Obligatoire', tone: 'critical'},
              {label: 'jpg'},
              {label: 'jpeg'},
              {label: 'png'},
              {label: 'webp'},
            ],
            description: (
              <>
                📌 Obligatoire afin d'augmenter les taux de conversion des liens vers cette page
                lorqu'elle est partagée sur les réseaux sociaux, e-mails, messages, etc. Cette image
                sera utlisée si la page consultée n'en contient pas. Format idéal: 1200×630 pixels.
              </>
            ),
          }),
      },
    }),
  ],
})
