export interface Color {
  blue: string;
  darkGray: string;
  gray38: string;
  gray44: string;
  gray80: string;
  gray85: string;
  gray93: string;
  green: string;
  red: string;
  vividCyan: string;
  vividCyan86: string;
}

export interface BackgroundColor {
  dark: string;
  light: string;
  lightBlue: string;
  veryLightGray: string;
}

export interface Theme {
  colors: Color;
  background: BackgroundColor;
}
const colors: Color = {
  blue: '#0000fF',
  darkGray: '#A3A3A3',
  gray38: '#616161',
  gray44: '#707070',
  gray80: '#cccccc',
  gray85: '#D9D9D9',
  gray93: '#EDEDED',
  green: '#00FF00',
  red: '#FF0000',
  vividCyan: '#0ad4fa',
  vividCyan86: 'rgba(10,212,255,0.86)',
};
const background: BackgroundColor = {
  dark: '#1e2228',
  light: '#fff',
  lightBlue: '#f4f7fd',
  veryLightGray: '#F9F9F9',
};

export const theme: Theme = {
  colors,
  background,
};
