import {ConfigContext} from 'sanity'
import {StructureBuilder} from 'sanity/desk'

export default function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType
) {
  return factory
}
