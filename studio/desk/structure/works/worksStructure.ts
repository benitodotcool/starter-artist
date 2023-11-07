import defineStructure from '../../../utils/defineStructure'
import {BsCardList} from 'react-icons/bs'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const ID = 'work'
const TITLE = 'Liste des projets'

export default defineStructure((S, context) =>
  orderableDocumentListDeskItem({
    S,
    context,
    type: ID,
    title: TITLE,
    icon: BsCardList,
  }),
)

// export default defineStructure((S) =>
//   S.listItem().title(TITLE).schemaType(ID).icon(BsCardList).child(S.documentTypeList(ID)),
// )
