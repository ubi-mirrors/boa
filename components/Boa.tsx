import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { IBoaTheme } from '../theme'
import { BaseHold } from './Basehold'

interface IBoaProps {
  theme: IBoaTheme,
  children?: React.ReactNode
}

export const Boa: React.StatelessComponent<IBoaProps> = ({ theme, children }) => {
  const content = process.env.NODE_ENV ? <BaseHold children={children}/> : children
  return <ThemeProvider theme={theme} children={content}/>
}
