// schemas/fields/url.js
import { defineType, defineField } from 'sanity';

export const urlField = defineType({
  name: 'urlField',
  title: 'URL Field',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      type: 'reference',
      to: [{ type: 'homePage' }], // Adjust to your actual page types
      hidden: ({ parent }) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'external',
    }),
  ],
});
