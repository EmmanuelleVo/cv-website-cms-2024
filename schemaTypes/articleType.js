import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'content', title: 'Content'},
    
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'details',
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        group: 'details',
        options: {
            source: 'title', 
            maxLength: 200
        },
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'image',
        type: 'image',
        group: 'details',
        options: {
            hotspot: true
        },
      }),    
      defineField({
        name: 'date',
        type: 'datetime',
        group: 'details',
        icon: CalendarIcon,
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'category',
        type: 'reference',
        group: 'details',
        to: [{type: 'articleCategory'}],
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'articleType',
        type: 'string',
        group: 'details',
        options: {
          list: ['in-person', 'virtual'],
          layout: 'radio',
        },
      }),
      defineField({
        name: 'excerpt',
        type: 'array',
        of: [{type: 'block'}],
        group: 'content',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'description',
        description: 'Wysiwyg editor',
        type: 'array',
        of: [{type: 'block'}],
        group: 'content',
        validation: Rule => Rule.required(),
      }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "headline.name",
      media: "image",
    },
  },
})