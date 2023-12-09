import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import App from "app/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "app/styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
