import {ListItemBuilder, StructureResolver} from 'sanity/desk'
import home from './structure/home'
import settings from './structure/settings'
import works from './structure/works'


// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    // Singletons
    'home',
    'settings',
    //Bases
    'baseWork',
    // Documents
    'work',
    // Media tag
    'media.tag',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Structure')
    .items([
      home(S, context),
      S.divider(),
      works(S, context),
      S.divider(),
      settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
