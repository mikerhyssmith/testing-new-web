import React from 'react';
import './App.css';
import {Grommet} from 'grommet';

import {theme} from './theme';
import {NetworkTester} from './components/NetworkTester/NetworkTester';

import './App.css';

function App() {
  return (
    <Grommet theme={theme as any}>
      <div className="App">
        <NetworkTester />
      </div>
    </Grommet>
  );
}

export default App;
