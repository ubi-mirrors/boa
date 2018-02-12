import * as React from 'react'
import styled from 'styled-components'
import Layout from '../styles/layout'
import zIndex from '../styles/zindex'

export interface IBaseholdTheme {
  stripeColor: string,
  stripeHeight: string
}

const Toggler = styled.button`
  font-size: 20px;

  position: fixed;
  bottom: 1em;
  left: 1em;

  width: 1em;
  height: 1em;

  padding: 0;

  background: purple;
  border: none;
  border-radius: 50%;
  opacity: .1;
  transition: opacity 300ms ease-out;
  cursor: pointer;
  z-index: ${zIndex.baseHold + 1};

  &:hover { opacity: 1; }
`

const Container = styled.div`

  &:before,
  &:after {
    ${Layout.fit()};
    content: '';
    z-index: ${zIndex.baseHold};
    pointer-events: none;
  }

  &:after {
    background: linear-gradient(
      to bottom,
      transparent,
      transparent 50%,
      ${(p: any) => p.theme.basehold.stripeColor} 50%,
      ${(p: any) => p.theme.basehold.stripeColor}
    );
    background-size: 100% ${(p: any) => p.theme.basehold.stripeHeight};
  }

  &:before {
    background: linear-gradient(
      to right,
      transparent,
      transparent 50%,
      ${(p: any) => p.theme.basehold.stripeColor} 50%,
      ${(p: any) => p.theme.basehold.stripeColor}
    );
    background-size: ${(p: any) => p.theme.basehold.stripeHeight};
  }

   &:before,
   &:after { display: ${(p: any) => p.hideGrid ? 'none' : 'block'}; }
`

export class BaseHold extends React.PureComponent {
  public static displayName = 'BaseHold'
  public state = { hideGrid: true }

  public render() {
    const { hideGrid } = this.state
    const { children } = this.props

    return (
      <Container
        // @ts-ignore
        hideGrid={hideGrid}
      >
        <Toggler onClick={this.toggleGridVisibility}/>
        {children}
      </Container>
    )
  }

  public toggleGridVisibility = () => { this.setState({ hideGrid: !this.state.hideGrid }) }
}
