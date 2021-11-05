import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from './constants/theme';
import Route from './Router/Route'
import GlobalState from './Global/GlobalState';
import GlobalStyle from './GlobalStyles';

function App() {

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Route/>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
