import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.4); }
  100% { transform: rotate(360deg) scale(1); }
`

const shrink = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.6); }
  100% { transform: translate(-50%, -50%) scale(1); }
`

const Spin = styled.div`
  position: relative;
  width: ${(p: any) => `${p.size}${p.unit}`};
  height: ${(p: any) => `${p.size}${p.unit}`};
  background: #eee;
  border-radius: 50%;
  margin: 1em;

  &:before,
  &:after {
    content: "";
    display: block;
    width: ${(p: any) => `${p.size}${p.unit}`};
    height: ${(p: any) => `${p.size}${p.unit}`};
    border-radius: 50%;
  }

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    height: ${(p: any) => `${p.size / 2}${p.unit}`};
    width: ${(p: any) => `${p.size / 2}${p.unit}`};
    background-color: #1ABC9C;
    animation: ${shrink} 3s ease infinite;
  }

  &:after {
    position: absolute;
    border: 4px solid transparent;
    border-top-color: #2ECC71;
    border-bottom-color: #2ECC71;
    animation: ${spin} 2s linear infinite;
  }
`

const Container = styled.div`
  display: ${(p: any) => p.show ? 'flex' : 'none'};
  background: ${(p: any) => p.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`

interface ILoader {
  background?: string,
  show?: boolean
}

export const Loader: React.StatelessComponent<ILoader> = (props) => {
  const spinProps = {
    size: 70,
    unit: 'px'
  }

  return (
    <Container {...props}>
      <Spin
        // @ts-ignore
        {...spinProps}
      />
    </Container>
  )
}

Loader.defaultProps = {
  background: 'white',
  show: false
}
