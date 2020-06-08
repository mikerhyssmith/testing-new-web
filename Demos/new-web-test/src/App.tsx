import React from 'react';
import './App.css';
import {Grommet} from 'grommet';

import {theme} from './theme';
import {NetworkTester} from './components/NetworkTester/NetworkTester';
import { VRWorld } from "./components/VRWorld/VRWorld";

import './App.css';

function App() {
  return (
    <Grommet full theme={theme as any} themeMode="dark">
      <div className="App">
        <VRWorld />
        <NetworkTester />
      </div>
    </Grommet>
  );
}

export default App;
