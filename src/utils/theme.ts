export interface Color {
  red: string;
  blue: string;
  green: string;
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
  green: '#00FF00',
  red: '#FF0000',
  blue: '#0000fF'
};
const background: BackgroundColor = {
  dark: '#1e2228',
  light: '#fff',
  lightBlue: '#f4f7fd',
  lightGray: '#CDCDD233'
};

export const theme: Theme = {
  colors,
  background
};
