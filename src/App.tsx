import Router from "./Router";
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/global";
import { ChampionsProvider } from "./context/champsContext";
import { RolesProvider } from "./context/rolesContext";
import { EmotesProvider } from "./context/emotesContext";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <EmotesProvider>
          <RolesProvider>
            <ChampionsProvider>
              <Router />
              <GlobalStyle />
            </ChampionsProvider>
          </RolesProvider>
        </EmotesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
