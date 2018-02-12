export { default as Flex } from './flex'

export default {
  invisible() { return 'visibility: hidden !important;' },
  fit() {
    return `
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    `
  },
  floating: {
    top() {
      return `
        top: 0;
        left: 0;
        right: 0;
      `
    },
    right() {
      return `
        top: 0;
        right: 0;
        bottom: 0;
      `
    },
    bottom() {
      return `
        right: 0;
        bottom: 0;
        left: 0;
      `
    },
    left() {
      return `
        top: 0;
        bottom: 0;
        left: 0;
      `
    }
  }
}
