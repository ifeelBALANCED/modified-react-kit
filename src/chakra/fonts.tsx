import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('/fonts/Fira_Sans/FiraSans-Thin.ttf') format('ttf');
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Fira_Sans/FiraSans-Regular.ttf') format('ttf');
      }

      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Fira_Sans/FiraSans-Black.ttf') format('ttf');
      }
      `}
  />
);
