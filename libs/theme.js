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
        bg: mode("LemonLime.Mint", "LemonLime.Navy")(props),
      },
    }),
  },
  sizes,
});
export default theme;
