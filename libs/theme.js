import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import sizes from "./sizes";
import colors from "./colors";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  fonts: {},
  colors,
  styles: {
    global: (props) => ({
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
      body: {
        bg: mode(
          "linear-gradient(132deg, rgba(104,0,255,1) 0%, rgba(82,244,255,1) 50%, rgba(76,255,0,1) 100%)",
          "linear-gradient(132deg, #1e2137ff 0%, #261440ff 100%)"
        )(props),
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      },
    }),
  },
  sizes,
});
export default theme;
