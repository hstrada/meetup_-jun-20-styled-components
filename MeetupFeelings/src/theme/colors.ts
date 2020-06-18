export default {
  purple: '#6600ff',
  yellowSubmarine: '#FFDD00',
  grey: '#ccc',
  white: '#fff',
  silver: '#888',
};

export interface ColorOptions {
  button: ColorsButtonSchema;
}

export type ButtonColorScheme = {
  background: string;
  fontColor: string;
};

export interface ColorsButtonSchema {
  primary: ButtonColorScheme;
  secondary: ButtonColorScheme;
  disabled: ButtonColorScheme;
}

export type ColorsButtonOptions = keyof ColorsButtonSchema;
