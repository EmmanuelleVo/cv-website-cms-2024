// schemas/sections.js
import { defineType, defineField } from 'sanity';

export const imageText = defineType({
  name: 'imageText',
  title: 'Image + Text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'portableText', // Use the blockContent schema here
    }),
  ],
});
