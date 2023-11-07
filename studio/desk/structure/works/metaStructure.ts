import defineStructure from '../../../utils/defineStructure'

const ID = 'baseWork'

export default defineStructure((S) =>
  S.listItem().title('Page').schemaType(ID).child(S.editor().schemaType(ID).documentId(ID)),
)
