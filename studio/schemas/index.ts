// Singletons
import home from "./singletons/home"
import settings from "./singletons/settings"

const singletons = [home, settings]

// Bases
import baseWork from "./singletons/base/baseWork"

const bases = [baseWork]

// Documents
import work from "./documents/work"

const documents = [work]

// Objects
import metaCard from "./objects/metaCard"
import globalMetaCard from "./objects/globalMetaCard"

const objects = [metaCard, globalMetaCard]

export const schemaTypes = [
  ...singletons,
  ...bases,
  ...documents,
  ...objects
]
