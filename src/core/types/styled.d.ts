import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      grey: string;
      greyBlack: string;
      greyBlack10: string;
      greyBlack20: string;
      greyBlack40: string;
      dark: string;
      black: string;
      white: string;
      yellow: string;
      error: string;
      negative: string;
    };
    sizes: {
      container: {
        width: number[];
        padding: string[];
      };
    };
    media: {
      large: string;
      medium: string;
    };
    fonts: {
      familyP: string;
      style: string;
      weight: {
        primary: string;
        span: string;
        secondary: string;
        title: string;
      };
      size: string;
      align: string;
      height: string;
      spacing: string;
    };
    button: string;
    flex: {
      row: string;
      column: string;
    };
    shadow: {
      primary: string;
      hover: string;
    };
    gradient: {
      primary: string;
      pressed: string;
      hover: string;
    };
    radius: string[];
  }
}
