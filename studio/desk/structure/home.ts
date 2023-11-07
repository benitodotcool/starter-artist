import defineStructure from '../../utils/defineStructure'

const ID = 'home'
const TITLE = 'Accueil'

export default defineStructure((S) =>
  S.listItem().title(TITLE).schemaType(ID).child(S.editor().schemaType(ID).documentId(ID)),
)
