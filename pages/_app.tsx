import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../theme';
import Head from 'next/head';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Head>
          <link href="/assets/fonts/1d03aea.ttf" rel="stylesheet" as="font" />
        </Head>
        <Global
          styles={`@font-face{font-family:Signatura;src:url(/assets/fonts/1d03aea.ttf) format("truetype")} 
          body:fullscreen {
            overflow: scroll !important;
          }
          body:-ms-fullscreen {
            overflow: scroll !important;
          }
          body:-webkit-full-screen {
            overflow: scroll !important;
          }
          body:-moz-full-screen {
            overflow: scroll !important;
          }`}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
