import { css } from 'styled-components'
import { Breakpoint } from './breakpoint'

interface IBreakpointSetConfiguration {
  unit: string
  values: Array<[string, number]>
}

export class BreakpointSet {
  public breakpoints: Breakpoint[]
  public unit: string

  constructor(configuration: IBreakpointSetConfiguration) {
    this.unit = configuration.unit
    this.breakpoints = configuration.values.map(([name, value], index) => (
      new Breakpoint(index, name, value, configuration.unit)
    ))
  }

  public get(name: string) {
    const breakpoint = this.breakpoints.find((currentBreakpoint: Breakpoint) => currentBreakpoint.name === name)
    if (!breakpoint) { throw new Error(`Breakpoint ${name} not found on BreakpointSet`) }
    return breakpoint
  }

  public between(startBreakpointName: string, endBreakpointName: string) {
    const startBreakpointValue = this.get(startBreakpointName).valueWithUnit
    const endBreakpointValue = this.get(endBreakpointName).value - 1

    return (...props: any[]) => {
      return css`
        @media (min-width: ${startBreakpointValue})
           and (max-width: ${this.valueWithUnit(endBreakpointValue)}) {
          ${css.call(this, ...props)}
        }
      `
    }
  }

  public only(breakpointName: string) {
    const breakpoint = this.get(breakpointName)
    const lastBreakpoint = this.breakpoints[this.breakpoints.length - 1]
    if (breakpoint.is(lastBreakpoint)) { return breakpoint.up }
    const nextBreakpoint = this.breakpoints[breakpoint.index + 1]
    return this.between(breakpoint.name, nextBreakpoint.name)
  }

  private valueWithUnit(value: number) { return value + this.unit }
}

export const createBreakpoints = (configuration: IBreakpointSetConfiguration): BreakpointSet => {
  return new BreakpointSet(configuration)
}
