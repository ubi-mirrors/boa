import { css } from 'styled-components'

const Container = {
  align: {
    start() { return 'align-items: flex-start;' },
    center() { return 'align-items: center;' },
    end() { return 'align-items: flex-end;' },
    baseline() { return 'align-items: baseline;' },

    centered() {
      return css`
        ${Container.align.center}
        ${Container.content.justify.center}
      `
    }
  },

  display: {
    block() { return 'display: flex;'},
    inline() { return 'display: inline-flex;' }
  },

  direction: {
    horizontal() { return 'flex-direction: row;' },
    vertical() { return 'flex-direction: column;' },
    reversed: {
      horizontal() { return 'flex-direction: row-reverse;' },
      vertical() { return 'flex-direction: column-reverse;' }
    }
  },

  wrap: {
    normal() { return 'flex-wrap: wrap;' },
    reversed() { return 'flex-wrap: wrap-reverse;' }
  },

  content: {
    align: {
      start() { return 'align-content: flex-start;' },
      end() { return 'align-content: flex-end;' },
      center() { return 'align-content: center;' },
      between() {return 'align-content: space-between;'},
      around() { return 'align-content: space-around;' }
    },

    justify: {
      start() { return 'justify-content: flex-start;' },
      end() { return 'justify-content: flex-end;' },
      center() { return 'justify-content: center;' },
      between() {return 'justify-content: space-between;'},
      around() { return 'justify-content: space-around;' }
    }
  }
}

const Child = {
  auto() { return 'flex: 1 1 auto;' },
  none() { return 'flex: none;' },
  flex() { return 'flex: 1; flex-basis: 0.000000001px;' },

  start() { return 'align-self: flex-start;' },
  center() { return 'align-self: center;' },
  end() { return 'align-self: flex-end;' },
  stretch() { return 'align-self: stretch;' },
  baseline() { return 'align-self: baseline;' }
}

export default {
  Child,
  Container
}
