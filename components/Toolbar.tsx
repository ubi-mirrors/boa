import * as React from 'react'
import styled, { css } from 'styled-components'

export interface IToolbarTheme {
  minHeight: string,
  padding: string
}

interface IToolbarProps {
  gutters: boolean
}

export const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: ${(p: any) => p.theme.toolbar.minHeight};

  ${(p: any) => p.gutters && css`
    padding: 0 ${() => p.theme.toolbar.padding};
  `}
`

export const Toolbar: React.StatelessComponent<IToolbarProps> = (props) => <StyledToolbar {...props}/>

Toolbar.defaultProps = {
  gutters: true
}
