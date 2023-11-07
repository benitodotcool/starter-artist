import {ListItemBuilder} from 'sanity/desk'
import {BsImages} from 'react-icons/bs'
import defineStructure from '../../../utils/defineStructure'
import works from './worksStructure'
import metaStructure from './metaStructure'

const TITLE = 'Projets'
const ICON = BsImages

export default defineStructure<ListItemBuilder>((S, context) =>
  S.listItem()
    .title(TITLE)
    .icon(ICON)
    .child(
      S.list()
        .title(TITLE)
        .items([works(S, context), metaStructure(S, context), S.divider()]),
    ),
)
