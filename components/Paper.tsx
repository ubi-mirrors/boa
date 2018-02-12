import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import { DynamicTagType, withDynamicTag } from '../dynamic-tag'

export interface IPaperTheme {
  background: string,
  color: string
}

interface IPaperProps {
  tag: DynamicTagType
  elevation: number,
  square: boolean,
  theme: any
}

const StyledPaper = withDynamicTag(styled.div`
  background-color: ${(p: any) => p.theme.paper.background};
  color: ${(p: any) => p.theme.paper.color};
  border-radius: ${(p: any) => p.square ? '0' : '2px'};
  box-shadow: ${(p: any) => p.theme.shadows[p.elevation]};
`)

const PaperComponent: React.StatelessComponent<IPaperProps> = (props) => {
  const { tag, elevation, theme, ...others } = props
  const finalElevation = elevation >= 0 && elevation < theme.shadows.length ? elevation : 0

  return <StyledPaper tag={tag} elevation={finalElevation} {...others}/>
}

PaperComponent.displayName = 'Paper'

export const Paper = withTheme(PaperComponent)

Paper.defaultProps = {
  elevation: 2,
  square: false,
  tag: 'div'
}
