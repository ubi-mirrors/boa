import { injectGlobal as InjectGlobal } from 'styled-components'
import { IBoaTheme } from '../theme'

export const injectGlobal = (theme: IBoaTheme) => {
  return InjectGlobal`
    *, :after, :before { box-sizing: inherit; }

    html, body { height: 100vh; }

    html {
      font-family: 'system-ui', 'Segoe UI', Helvetica, Arial, sans-serif,
                   'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

      font-size: ${theme.page.fontSize}px;
      line-height: ${theme.page.lineHeight};
      text-size-adjust: 100%;

      text-size-adjust: 100%;
      box-sizing: border-box;
      -ms-overflow-style: scrollbar;
    }

    body {
      margin: 0;

      background-color: ${theme.page.background};
      color: ${theme.page.color};

      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    #root {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow-x: hidden;
    }
  `
}

// .component.unresolved {
//   opacity: 0;
//   transform: scale(.75);
//   transition: all .35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// }
//
// .component.resolved {
//   opacity: 1;
//   transform: scale(1);
// }
