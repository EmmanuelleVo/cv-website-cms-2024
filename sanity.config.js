import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { structure } from './structure'
import { media } from 'sanity-plugin-media'
import { linkField } from 'sanity-plugin-link-field'

export default defineConfig({
  name: 'default',
  title: 'cv-website-cms-2024',

  projectId: 'ajdos32k',
  dataset: 'production',

  plugins: [
    //structureTool({structure}), 
    structureTool({
      structure
    }),
    visionTool(),
    media(),
    linkField(),

  ],
  // form: {
  //   // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
  //   file: {
  //     assetSources: previousAssetSources => {
  //       return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
  //     }
  //   }
  // },

  schema: {
    types: schemaTypes,
  },
})
