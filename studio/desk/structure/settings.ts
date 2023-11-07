import defineStructure from '../../utils/defineStructure'

const ID = 'settings'
const TITLE = 'Réglages'

export default defineStructure((S) =>
  S.listItem().title(TITLE).schemaType(ID).child(S.editor().schemaType(ID).documentId(ID)),
)
