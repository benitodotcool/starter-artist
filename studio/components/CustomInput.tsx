import {ReactElement} from 'react'
import {StringInputProps, StringSchemaType, TextSchemaType} from 'sanity'
import {Stack, Badge, Inline, Text, Box} from '@sanity/ui'

type CustomProps = {
  tone?: 'critical' | 'caution'
  maxLength?: number
  badges?: {
    label: string
    tone?: 'critical' | 'caution'
  }[]
  description?: string | ReactElement
}

export default function CustomInput({
  ...props
}: StringInputProps<StringSchemaType | TextSchemaType> & CustomProps) {
  return (
    <Stack space={2}>
      {props.description && (
        <Box paddingTop={0} paddingBottom={1}>
          <Text size={1} muted>
            {props.description}
          </Text>
        </Box>
      )}
      {props.maxLength && (
        <Inline space={1}>
          <Badge mode="outline" tone={props.tone}>
            {props.tone === 'caution' ? 'Facultatif' : 'Obligatoire'}
          </Badge>
          <Badge mode="outline" tone={props.tone}>
            {props.value?.length || 0} / {props.maxLength}
          </Badge>
        </Inline>
      )}
      {props.badges && (
        <Inline space={1}>
          {props.badges.map((badge) => (
            <Badge key={badge.label} mode="outline" tone={badge.tone}>
              {badge.label}
            </Badge>
          ))}
        </Inline>
      )}
      {props.renderDefault(props)}
    </Stack>
  )
}
