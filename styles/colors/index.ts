import amber from './amber'
import blue from './blue'
import blueGrey from './blueGrey'
import brown from './brown'
import common from './common'
import cyan from './cyan'
import deepOrange from './deepOrange'
import deepPurple from './deepPurple'
import green from './green'
import grey from './grey'
import indigo from './indigo'
import lightBlue from './lightBlue'
import lightGreen from './lightGreen'
import lime from './lime'
import orange from './orange'
import pink from './pink'
import purple from './purple'
import red from './red'
import teal from './teal'
import yellow from './yellow'

interface IColorPalette {
  red: any,
  common: any,
  pink: any,
  purple: any,
  deepPurple: any,
  indigo: any,
  blue: any,
  lightBlue: any,
  cyan: any,
  teal: any,
  green: any,
  lightGreen: any,
  lime: any,
  yellow: any,
  amber: any,
  orange: any,
  deepOrange: any,
  brown: any,
  grey: any,
  blueGrey: any
}

export const createColorPalette = (): IColorPalette => {
  return {
    amber,
    blue,
    blueGrey,
    brown,
    common,
    cyan,
    deepOrange,
    deepPurple,
    green,
    grey,
    indigo,
    lightBlue,
    lightGreen,
    lime,
    orange,
    pink,
    purple,
    red,
    teal,
    yellow
  }
}
