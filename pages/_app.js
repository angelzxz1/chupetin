import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import Fonts from "../components/fonts";
import Main from "../components/layouts/main";
function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router} tittle={Component.tittle}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}

export default App;
