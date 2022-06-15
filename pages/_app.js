import React from "react";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import customTheme from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: false,
        }}
      ></ColorModeProvider>
      <style jsx global>{`
        #__next {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        @media only screen and (max-height: 500px) {
          #__next {
            height: 100%;
          }
        }
        .chakra-wrap__list {
          grid-gap: 30px;
        }
        main {
          margin-inline-end: 0 !important;
          -webkit-margin-end: 0 !important;
          -webkit-margin-start: 0 !important;
          min-height: auto !important ;
          min-width: 0 !important;
        }
      `}</style>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
