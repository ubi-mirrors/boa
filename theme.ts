import {
  IAppBarTheme,
  IBaseholdTheme,
  IContainerTheme,
  IPageTheme,
  IPaperTheme,
  ITextTheme,
  IToolbarTheme
} from './components'
import { Baseline, createBaseline } from './styles/baseline'
import { BreakpointSet, createBreakpoints } from './styles/breakpointset'
import { createColorPalette } from './styles/colors'
import { createModularScale, Modularscale, RATIOS } from './styles/modularscale'
import shadows from './styles/shadow'
import { createTransition, Transition } from './styles/transition'

export interface IBoaTheme {
  appBar: IAppBarTheme,
  basehold: IBaseholdTheme,
  baseline: Baseline,
  breakpointSet: BreakpointSet,
  container: IContainerTheme,
  modularScale: Modularscale,
  page: IPageTheme,
  paper: IPaperTheme,
  transition: Transition,
  shadows: string[],
  text: ITextTheme,
  toolbar: IToolbarTheme
}

const FONT_SIZE = 16
const BASELINE = 1.5
const UNIT = 'rem'

const baseline = createBaseline({
  base: 1,
  unit: UNIT
})
const transition = createTransition()
const colorPalette = createColorPalette()
const breakpointSet = createBreakpoints({
  unit: 'px',
  values: [
    ['phone', 0],
    ['tablet', 481],
    ['desktop', 840],
    ['desktopLarge', 1600]
  ]
})
const modularScale = createModularScale({
  base: 1,
  ratio: RATIOS.goldenSection,
  unit: UNIT
})

const primaryColor = colorPalette.blue[500]
const padding = baseline.scaleWithUnit(1)
const appBarHeight = baseline.scaleWithUnit(3)

export const Theme: IBoaTheme = {
  appBar: {
    background: primaryColor,
    color: 'white',
    height: appBarHeight
  },
  basehold: {
    stripeColor: 'hsla(95, 53%, 36%, 0.1)',
    stripeHeight: baseline.scaleWithUnit(2)
  },
  baseline,
  breakpointSet,
  container: {
    maxWidth: '1600px',
    padding
  },
  modularScale,
  page: {
    appBarMargin: appBarHeight,
    background: 'white',
    color: 'hsl(219,12%,20%)',
    fontSize: FONT_SIZE,
    lineHeight: BASELINE
  },
  paper: {
    background: 'white',
    color: 'yellow'
  },
  shadows,
  text: {
    types: {
      body: {
        fontSize: baseline.scaleWithUnit(1),
        gutter: baseline.scaleWithUnit(1),
        lineHeight: baseline.scale(1),
        tag: 'p'
      },
      subtitle: {
        fontSize: baseline.scaleWithUnit(1.5),
        gutter: baseline.scaleWithUnit(2),
        lineHeight: baseline.scale(1.5),
        tag: 'h2'
      },
      title: {
        fontSize: baseline.scaleWithUnit(2),
        gutter: baseline.scaleWithUnit(2),
        lineHeight: baseline.scale(1.5),
        tag: 'h1'
      }
    }
  },
  toolbar: {
    minHeight: appBarHeight,
    padding
  },
  transition
}

export const createTheme = () => {
  return Theme
}

// hsl(219, 29%, 12%)
// hsl(223, 23%, 21%)
// hsl(11, 96%, 57%)

/*
* sxmall  0            4    16
* sxmall  360   22.5   4    16
* sxmall  400   26.6   4    16
* sxmall  480   30     4    16     phone
*
* small   600   37.5   8    16/24  tablet
* small   720   45     8    16/24
* small   840   52.5   12   16/24  desktop
* small   960   60     12   24
*
* medium  1024  64     12   24
* medium  1280  80     12   24
*
* large   1440  90     12   24
* large   1600  100    12   24
*
* xlarge  1920  120    12   24
* */
