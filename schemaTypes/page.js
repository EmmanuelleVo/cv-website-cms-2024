// schemas/page.js
import {defineType, defineField} from 'sanity'
import { aboutPage } from './pages/about'
import { homePage } from './pages/home'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {name: 'information', title:'Informations'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'information',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'information',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'pageType',
        title: 'Page Type',
        type: 'string',
        group: 'information',
        options: {
          list: [
            { title: 'Home', value: 'home' },
            { title: 'About', value: 'about' },
          ],
          layout: 'dropdown',
        },
      }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      group: 'information',
    }),

    homePage,
    aboutPage,

  ],

})