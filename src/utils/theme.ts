export interface Color {
  blue: string;
  gray80: string;
  gray85: string;
  gray93: string;
  green: string;
  red: string;
}

export interface BackgroundColor {
  dark: string;
  light: string;
  lightBlue: string;
  lightGray: string;
}

export interface Theme {
  colors: Color;
  background: BackgroundColor;
}
const colors: Color = {
  blue: '#0000fF',
  gray80: '#cccccc',
  gray85: '#D9D9D9',
  gray93: '#EDEDED',
  green: '#00FF00',
  red: '#FF0000',
};
const background: BackgroundColor = {
  dark: '#1e2228',
  light: '#fff',
  lightBlue: '#f4f7fd',
  lightGray: '#CDCDD233',
};

export const theme: Theme = {
  colors,
  background,
};
