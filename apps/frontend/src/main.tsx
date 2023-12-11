import { StrictMode, createContext } from "react";
import * as ReactDOM from "react-dom/client";

import App from "app/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "app/styles/theme";
import UserStore from "shared/store/user";

interface State {
  UStore: UserStore;
}

const UStore = new UserStore();

export const Context = createContext<State>({
  UStore,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Context.Provider value={{ UStore }}>
        <App />
      </Context.Provider>
    </MantineProvider>
  </StrictMode>,
);
