import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from './constants/theme';
import Route from './Router/Route'
import GlobalState from './Global/GlobalState';

function App() {

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Route/>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
