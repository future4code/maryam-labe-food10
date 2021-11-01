import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from './constants/theme';
import Route from './Router/Route'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route/>
    </ThemeProvider>
  );
}

export default App;
