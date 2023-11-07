import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {noteField} from 'sanity-plugin-note-field'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { structure } from './desk'

export default defineConfig({
  name: 'default',
  title: 'starter UR×BN',

  projectId: 'rv92quiy',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool(), noteField(), media()],

  schema: {
    types: schemaTypes,
  },
})
