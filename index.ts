import { injectGlobal } from './styles'
import { createTheme, IBoaTheme } from './theme'

export interface IBoaConfiguration {
  theme: IBoaTheme
}

export const bootstrap = (): IBoaConfiguration => {
  const theme = createTheme()

  injectGlobal(theme)

  return { theme }
}
