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
          <title>Salwa & Bagus - Undangan Pernikahan</title>
          <meta name="description" content="Agustus 2021" />

          <meta
            property="og:title"
            content="Salwa & Bagus - Undangan Pernikahan"
          />
          <meta property="og:description" content="Agustus 2021" />
          <meta
            property="og:url"
            content={`https://salwabaguswedding.vercel.app`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image:secure_url"
            itemProp="image"
            content="https://salwabaguswedding.vercel.app/assets/images/thumb.jpg"
          />
        </Head>
        <Global
          styles={`@font-face{font-family:Signatura;src:url(/assets/fonts/1d03aea.ttf);font-display:block format("truetype")} 
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
