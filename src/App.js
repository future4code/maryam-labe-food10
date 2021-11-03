import React from 'react';
import Route from './Router/Route'
import GlobalState from './Global/GlobalState';

function App() {

  return (
    <GlobalState>
      <Route/>
    </GlobalState>
  );
}

export default App;
