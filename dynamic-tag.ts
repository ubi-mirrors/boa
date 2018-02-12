import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const CACHE = Object.create(null)

export type DynamicTagType = keyof JSX.IntrinsicElements

interface IDynamicTagProps {
  [k: string]: any,

  tag: DynamicTagType,
  children?: React.ReactNode
}

export const withDynamicTag = (Component: StyledComponentClass<any, any>) => {
  const DynamicTag: React.StatelessComponent<IDynamicTagProps> = (props): React.ReactElement<any> => {
    const { tag } = props

    if (typeof tag !== 'string' || !styled.hasOwnProperty(tag)) {
      return React.createElement(Component, props)
    }

    if (CACHE[tag] === undefined) {
      CACHE[tag] = Component.withComponent(tag)
    }

    return React.createElement(CACHE[tag], props)
  }

  const name = Component.displayName || Component.constructor.name

  if (name) { DynamicTag.displayName = `DynamicTag(${name})` }

  return DynamicTag
}
