const DEFAULT_UNIT = 'rem'

interface IBaselineConfiguration {
  base: number,
  unit?: string
}

export class Baseline {
  private base: number
  private unit: string

  constructor(configuration: IBaselineConfiguration) {
    this.base = configuration.base
    this.unit = configuration.unit || DEFAULT_UNIT
  }

  public scale(value: number): string {
    return (this.base * value).toFixed(2)
  }

  public scaleWithUnit(value: number): string {
    return this.scale(value) + this.unit
  }
}

export const createBaseline = (configuration: IBaselineConfiguration): Baseline => new Baseline(configuration)
