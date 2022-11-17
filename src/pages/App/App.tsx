import { createTheme, ThemeProvider } from "@mui/material";
import MainRoutes from "../../routes";

const mdTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <MainRoutes />
    </ThemeProvider>
  );
};
