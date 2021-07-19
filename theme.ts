import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  ...config,
  colors: {
    primary: {
      '50': '#F8F4ED',
      '100': '#EBE1CC',
      '200': '#DECDAB',
      '300': '#D1B98A',
      '400': '#C4A669',
      '500': '#B89247',
      '600': '#937539',
      '700': '#6E582B',
      '800': '#493A1D',
      '900': '#251D0E',
    },
  },
  fonts: {
    body: 'Montserrat',
    heading: 'Montserrat',
    mono: 'Montserrat',
  },
});

export default theme;
