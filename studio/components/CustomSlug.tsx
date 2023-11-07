import {Stack, Badge, Inline, Text, Box, Card, Label} from '@sanity/ui'
import {BASE_URL} from '../constants'
import {MAX_SLUG_LENGTH} from '../utils/validateSlug'

export default function CustomSlug({...props}) {
  const isRoot = props.isRoot
  const isHome = props.isHome
  const slug = props.value?.current ? props.value.current : '…'
  const basePath = props.basePath
  const url = !basePath ? BASE_URL + slug : BASE_URL + basePath + '/' + slug

  return (
    <Stack space={2}>
      {!isRoot && (
        <>
          <Box paddingTop={0} paddingBottom={1}>
            <Text size={1} muted>
              📌 Obligatoire afin de générer l'URL de la page. Il doit être compréhensible pour
              faciliter la navigation et le référencement. Ne doit pas excéder {MAX_SLUG_LENGTH}{' '}
              caractères. Il est basé sur le champ ci-dessus, et peux être généré automatiquement en
              cliquant sur le bouton{' '}
              <code style={{paddingRight: '3px', paddingLeft: '3px'}}>Generate</code>.
            </Text>
          </Box>
          <Inline space={1}>
            <Badge mode="outline" tone="critical">
              Obligatoire
            </Badge>
            <Badge mode="outline" tone="critical">
              {props.value?.current.length || 0} / {MAX_SLUG_LENGTH}
            </Badge>
          </Inline>
        </>
      )}
      {!isHome && props.renderDefault(props)}
      <Card padding={3} radius={2} shadow={1} tone={slug === '…' ? 'default' : 'primary'}>
        <Label size={1} muted>
          {slug !== '…' ? (
            <a href={url} target="_blank" rel="noopener noreferrer" style={{color: '#1a4d9e'}}>
              {url}
            </a>
          ) : (
            url
          )}
        </Label>
      </Card>
    </Stack>
  )
}
