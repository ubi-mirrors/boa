import { css } from 'styled-components'

/*
* TODO fix css.call
* Related to https://github.com/Microsoft/TypeScript/issues/4130#issuecomment-294849408
* */
export class Breakpoint {
  constructor(public index: number,
              public name: string,
              public value: number,
              public unit: string) {}

  get valueWithUnit() { return this.getValueWithUnit(this.value) }

  public up(...props: any[]) {
    if (this.index === 0) { return css.call(this, ...props) }
    return css`@media(min-width: ${this.valueWithUnit}) { ${css.call(this, ...props)} }`
  }

  public down(...props: any[]) {
    if (this.index === 0) { return css.call(this, ...props) }
    const cssValue = this.getValueWithUnit(this.value - 1)
    return css`@media(max-width: ${cssValue}) { ${css.call(this, ...props)} }`
  }

  public is(breakpoint: Breakpoint) { return this.name === breakpoint.name }

  private getValueWithUnit(value: number) { return value + this.unit }
}
