export const RATIOS = {
  minorSecond: 1.067,
  majorSecond: 1.125, // tslint:disable-line
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
}

const DEFAULT_UNIT = 'rem'

interface IModulareScaleConfiguration {
  base: number,
  ratio: number,
  unit?: string
}

export class Modularscale {
  private base: number
  private ratio: number
  private unit: string

  constructor(configuration: IModulareScaleConfiguration) {
    this.base = configuration.base
    this.ratio = configuration.ratio
    this.unit = configuration.unit || DEFAULT_UNIT
  }

  public scale(value: number): number {
    return Number((Math.pow(this.ratio, value) * this.base).toFixed(2))
  }

  public scaleWithUnit(value: number): string {
    return this.scale(value) + this.unit
  }
}

export const createModularScale = (configuration: IModulareScaleConfiguration): Modularscale => {
  return new Modularscale(configuration)
}

/*
context: font size of the container
target: desired size
*/
export const targetSize = (target: number, context: number = 16): number => target / context
