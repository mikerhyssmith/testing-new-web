import React from 'react';
import './App.css';
import {Grommet} from 'grommet';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {theme} from './theme';
import {NetworkTester} from './components/NetworkTester/NetworkTester';
import {VRWorld} from './components/VRWorld/VRWorld';

import './App.css';
import {VRWorldOld} from './components/VRWorld/VRWorldOld';

function App() {
  return (
    <Router>
      <Grommet full theme={theme as any} themeMode="dark">
        <div className="App">
          <Switch>
            <Route path="/VR">
              <VRWorld />
              {/* <VRWorldOld /> */}
            </Route>
            <Route path="/network">
              <NetworkTester />
            </Route>
            <Route path="/">
              <Link to="/VR">VR Demo</Link>
              <Link to="/network">Network Tester</Link>
            </Route>
          </Switch>
        </div>
      </Grommet>
    </Router>
  );
}

export default App;
