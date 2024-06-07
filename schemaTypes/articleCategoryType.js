import {defineField, defineType} from 'sanity'

export const articleCategoryType = defineType({
  name: 'articleCategory',
  title: 'Article category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'name'},
      }),
  ],
})