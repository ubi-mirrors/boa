import * as React from 'react'
import styled, { css, InterpolationValue, ThemeProvider } from 'styled-components'
import Layout, { Flex } from '../styles/layout'
import zIndex from '../styles/zindex'
import { IBoaTheme } from '../theme'
import { Paper } from './Paper'

export interface IAppBarTheme {
  background: string,
  color: string,
  height: string
}

enum AppBarPositions {
  absolute = 'absolute',
  fixed = 'fixed',
  static = 'static'
}

type AppBarPosition = {
  [k in AppBarPositions]: string | InterpolationValue[]
}

interface IAppBarProps {
  position: keyof AppBarPositions
}

const positions: AppBarPosition = {
  absolute: css`
    position: absolute;
    ${Layout.floating.top()};
  `,
  fixed: css`
    position: fixed;
    ${Layout.floating.top()};
  `,
  static: 'position: static;'
}

const applyAppBarTheme = (theme: IBoaTheme) => {
  return {
    ...theme,
    paper: {
      background: theme.appBar.background,
      color: theme.appBar.color
    }
  }
}

const Container = styled(Paper)`
  ${(p: any) => {
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/13042
    return positions[p.position]
  }};
  ${Flex.Container.display.block()};
  ${Flex.Container.direction.vertical()};
  ${Flex.Container.content.justify.center()};
  height: ${(p) => p.theme.appBar.height};
  z-index: ${zIndex.appBar};
  flex-shrink: 0;
`

export const AppBar: React.StatelessComponent<IAppBarProps> = (props) => {
  return (
    <ThemeProvider theme={applyAppBarTheme}>
      <Container
        square={true}
        tag="header"
        elevation={4}
        {...props}
      />
    </ThemeProvider>
  )
}

AppBar.defaultProps = {
  position: 'fixed'
}
