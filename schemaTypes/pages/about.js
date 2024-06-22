import { defineField } from 'sanity';

export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'object',
  groups: [
    {name: 'section_1', title:'Section 1 - Introduction'},
    {name: 'section_2', title:'Section 2 - About'},
    
  ],
  hidden: ({ parent }) => parent?.pageType !== 'about',
  fields: [
    defineField({
        name: 'section_1_title',
        title: 'Title',
        type: 'string',
        group: 'section_1',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'section_1_image',
        title: 'Image',
        type: 'image',
        group: 'section_1',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'section_1_text',
        title: 'Text',
        type: 'array',
        of: [{type: 'block'}],
        group: 'section_1',
      }),

      defineField({
        name: 'section_2_title',
        title: 'Title',
        type: 'string',
        group: 'section_2',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'section_2_image',
        title: 'Image',
        type: 'image',
        group: 'section_2',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'section_2_text',
        title: 'Text',
        type: 'array',
        of: [{type: 'block'}],
        group: 'section_2',
      }),

  ],
};