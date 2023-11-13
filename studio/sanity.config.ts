import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {noteField} from 'sanity-plugin-note-field'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './desk'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_PROJECT_NAME,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool(), noteField(), media()],

  schema: {
    types: schemaTypes,
  },
})
