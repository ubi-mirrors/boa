import styled from 'styled-components'
import { Flex } from '../styles/layout'

export interface IContainerTheme {
  maxWidth: string,
  padding: string
}

export const Container = styled.div`
  ${Flex.Container.display.block()};
  ${Flex.Container.direction.vertical()};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(p: any) => p.limited ? p.theme.container.maxWidth : '100%'};
  padding-left: ${(p: any) => p.theme.container.padding};
  padding-right: ${(p: any) => p.theme.container.padding};
`
