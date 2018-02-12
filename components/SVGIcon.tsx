import * as React from 'react'
import styled from 'styled-components'

export interface ISVGIconProps {
  color: string,
  children: React.ReactNode,
  titleAccess: boolean,
  size: string,
  viewBox: string
}

const SVG = styled.svg`
  display: inline-block;
  fill: currentColor;
  height: ${(p: any) => p.size};
  width: ${(p: any) => p.size};
  user-select: none;
  flex-shrink: 0;
  color: ${(p: any) => p.color};
  transition: ${(p: any) => p.theme.transition.create('fill', { duration: p.theme.transition.durations.shorter })};
`

export const SVGIcon: React.StatelessComponent<ISVGIconProps> = (props) => {
  const { titleAccess, children, size, ...others } = props

  return (
    <SVG
      width={size}
      height={size}
      // @ts-ignore
      size={size}
      focusable="false"
      aria-hidden={titleAccess ? 'false' : 'true'}
      {...others}
    >
      {titleAccess ? <title>{titleAccess}</title> : null}
      {children}
    </SVG>
  )
}

SVGIcon.defaultProps = {
  color: 'inherit',
  size: '1.5em',
  viewBox: '0 0 24 24'
}
