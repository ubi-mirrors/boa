import * as React from 'react'
import styled from 'styled-components'
import * as WebFont from 'webfontloader'
import { Flex } from '../styles/layout'

export interface IPageTheme {
  appBarMargin: string,
  background: string,
  color: string,
  fontSize: number,
  lineHeight: number
}

interface IFont {
  name: string,
  weights: string
}

interface IPageProps {
  children?: React.ReactNode,
  font: {
    families: IFont[],
    weight: string
  },
  fullbleed?: boolean,
  hasAppBar?: boolean
}

const PageContainer = styled.main`
  ${Flex.Container.display.block()};
  ${Flex.Container.direction.vertical()};

  font-family: ${(p: any) => p.font.families || 'inherit'};
  font-weight: ${(p: any) => p.font.weight};
  min-height: ${(p: any) => p.fullbleed ? '100vh' : 'auto'};
  margin-top: ${(p: any) => p.hasAppBar ? p.theme.page.appBarMargin : '0'};
`

export class Page extends React.PureComponent<IPageProps> {
  public static defaultProps = {
    font: { families: [], weight: 'inherit' }
  }

  public componentWillMount() {
    this.loadFonts()
  }

  public render() {
    const font = this.getPageFont()
    return (
      <PageContainer
        {...this.props}
        // @ts-ignore
        font={font}
      />
    )
  }

  public getPageFont() {
    const families = this.getCSSFontFamily()

    return {
      families,
      weight: this.props.font.weight
    }
  }

  public getCSSFontFamily() {
    return this.props.font.families.map((font) => font.name).join(', ')
  }

  public loadFonts() {
    const families = this.props.font.families.map((font) => {
      return `${font.name}:${font.weights}`
    })

    if (!families.length) {
      return
    }

    return WebFont.load({
      google: { families }
    })
  }
}
