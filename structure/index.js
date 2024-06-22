//import  {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon, ProjectsIcon, CogIcon, CommentIcon, TagIcon, TrolleyIcon} from '@sanity/icons'


export const structure = (S) =>
    S.list()
      .id('root')
      .title('Content')
      .items([
        S.documentTypeListItem('page').title('Pages'),
        S.divider(),

        S.documentTypeListItem('article').title('Articles').icon(CalendarIcon),
        S.documentTypeListItem('articleCategory').title('Article categories').icon(TagIcon),
        S.listItem()
          .title('Articles By Category')
          .child(
            S.documentTypeList('articleCategory')
              .title('Categories')
              .child((articleCategoryId) =>
                S.documentList()
                  .title('Articles')
                  .filter('_type == "article" && $articleCategoryId == category._ref')
                  .params({articleCategoryId}),
              ),
          ),

          S.divider(),
          S.documentTypeListItem('project').title('Projects').icon(ProjectsIcon),

          S.divider(),
          S.listItem()
            .id('siteSettings')
            .schemaType('settings')
            .title('Site Settings')
            .icon(CogIcon)
            .child(
              S.editor()
                .id('siteSettings')
                .schemaType('settings')
                .documentId('siteSettings')
            ),
        
        
        // // list all document types except 'settingsType'
        // ...S.documentTypeListItems().filter(
        //     (item) => item.getId() !== 'settings',
        // ),

      ])