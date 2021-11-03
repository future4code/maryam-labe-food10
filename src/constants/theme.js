import { createTheme } from "@material-ui/core";
import { primaryColor, neutralColor, loadingColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      ContrastText: "white",
    },
    text: {
      primary: neutralColor,
    },
  },
});
export default theme;
