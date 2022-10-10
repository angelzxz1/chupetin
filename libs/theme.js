import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import sizes from "./sizes";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  fonts: {},
  colors: {},
  styles: {
    global: {
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
    },
  },
  sizes: sizes,
});
export default theme;
