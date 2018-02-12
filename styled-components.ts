import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { IBoaTheme } from './theme'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IBoaTheme>

export { css, injectGlobal, keyframes, ThemeProvider }
export default styled
