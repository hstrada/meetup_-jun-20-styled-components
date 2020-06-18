import { DefaultTheme } from 'styled-components';

import colors, { ColorOptions } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorOptions;
  }
}

export const theme: DefaultTheme = {
  colors: {
    button: {
      primary: {
        background: colors.purple,
        fontColor: colors.white,
      },
      secondary: {
        background: colors.yellowSubmarine,
        fontColor: colors.silver,
      },
      disabled: {
        background: colors.grey,
        fontColor: colors.white,
      },
    },
  },
};
