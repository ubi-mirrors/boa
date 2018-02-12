import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import { withDynamicTag } from '../dynamic-tag'

enum TextTypes {
  body = 'body',
  subtitle = 'subtitle',
  title = 'title'
}

interface ITextThemeTypeValue {
  fontSize: string,
  gutter: string,
  lineHeight: string,
  tag: keyof JSX.IntrinsicElements
}

export interface ITextTheme {
  types: { [key in TextTypes]: ITextThemeTypeValue }
}

interface ITextProps {
  children?: React.ReactNode,
  theme: any,
  type: string,
  noWrap: boolean,
  gutter: boolean
}

const StyledText = withDynamicTag(styled.span`
  display: block;
  margin: 0 0 ${(p: any) => p.gutter ? p.theme.text.types[p.type].gutter : 0};

  font-size: ${(p: any) => p.theme.text.types[p.type].fontSize};
  line-height: ${(p: any) => p.theme.text.types[p.type].lineHeight};

  ${(p: any) => p.noWrap && `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`)

const TextComponent: React.StatelessComponent<ITextProps> = (props) => {
  const { type, theme, ...others } = props
  const tag = theme.text.types[type].tag

  return <StyledText type={type} tag={tag} {...others} />
}

TextComponent.displayName = 'Text'

export const Text = withTheme(TextComponent)

Text.defaultProps = {
  gutter: false,
  noWrap: false,
  type: 'body'
}
