import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e4b99",
    },
    secondary: {
      main: "#189dc3",
    },
    background: {
      main: "#c0cad4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
