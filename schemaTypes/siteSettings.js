import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {name: 'website', title:'Website'},
    {name: 'contact', title:'Contact'},
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      group: 'website',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      group: 'website',

    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'file',
      group: 'website',

    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
        group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      group: 'contact',
  }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
      group: 'contact',
    }),
  ],
})