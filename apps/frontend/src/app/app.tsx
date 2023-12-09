import { withProviders } from "./providers";
import "./index.scss";
import "@mantine/core/styles.css";
import { Routing } from "../pages";
import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <div className="app">
      <MantineProvider theme={theme}>
        <Routing />
      </MantineProvider>
    </div>
  );
};

export default withProviders(App);
