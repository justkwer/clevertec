import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#F83600',
    secondary: '#F9D423',
    accent: '#FF5253',
    grey: '#727272',
    greyBlack: '#F9F9FA',
    greyBlack10: '#EBEBEB',
    greyBlack20: '#BFC4C9',
    greyBlack40: '#A7A7A7',
    dark: '#363636',
    black: '#000000',
    white: '#FFFFFF',
    yellow: '#FFBC1F',
    error: '#FEEBEA',
    negative: '#F42C4F',
  },
  sizes: {
    container: {
      width: [1440, 768, 320],
      padding: ['0 165px', '0 64px', '0 16px'],
    },
  },
  media: {
    large: '1255px',
    medium: '570px',
  },
  fonts: {
    familyP: 'Montserrat, sans-serif',
    style: 'normal',
    weight: {
      primary: '400',
      span: '500',
      secondary: '600',
      title: '700',
    },
    size: '16px',
    align: 'center',
    height: '24px',
    spacing: '0.1px',
  },
  button: 'border: none; text-decoration: none; cursor: pointer; background: none;',
  flex: {
    row: 'display: flex; justify-content: center;  align-items: center;',
    column: 'display: flex; flex-direction: column; justify-content: center; align-items: center;',
  },
  shadow: {
    primary:
      '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);',
    hover: '0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);',
  },
  gradient: {
    primary: 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);',
    pressed: 'linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%);',
    hover: 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);',
  },
  radius: ['10px', '3px'],
};
