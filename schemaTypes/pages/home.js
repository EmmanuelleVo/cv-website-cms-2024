import { defineField } from 'sanity';

export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'object',
  groups: [
    {name: 'information', title: 'Information'},
    {name: 'section_1', title:'Section 1 - Introduction'},
    {name: 'section_2', title:'Section 2 - Formation'},
    {name: 'section_3', title:'Section 3 - Projects'},
    {name: 'section_4', title:'Section 4 - My competences'},
    
  ],
  hidden: ({ parent }) => parent?.pageType !== 'home',
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
        name: 'section_2_text',
        title: 'Text',
        type: 'array',
        of: [{type: 'block'}],
        group: 'section_2',
      }),
      defineField({
        name: 'link',
        title: 'Link',
        type: 'link',
        group: 'section_2',
        options: {
            enableText: true
          }
      }),

      defineField({
        name: 'section_3_title',
        title: 'Title',
        type: 'string',
        group: 'section_3',
        validation: (Rule) => Rule.required(),
      }),

      defineField({
        name: 'section_4_title',
        title: 'Title',
        type: 'string',
        group: 'section_4',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'competences',
        title: 'What I Do',
        type: 'array',
        group: 'section_4',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'competenceName',
                title: 'Competence Name',
                type: 'string',
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        group: 'section_4',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'technologyName',
                title: 'Technology Name',
                type: 'string',
              }),
            ],
          },
        ],
      }),

  ],
};