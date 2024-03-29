import React from 'react';
import './App.css';
import {Grommet} from 'grommet';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {theme} from './theme';
import {NetworkTester} from './components/NetworkTester/NetworkTester';
import {VRWorld} from './components/VRWorld/VRWorld';

import './App.css';
import {BubblePopper} from './components/BubblePopper/BubblePopper';
import {ThreeDee} from './components/VRWorld/ThreeDee';

function App() {
  return (
    <Router>
      <Grommet full theme={theme as any} themeMode="dark">
        <div className="App">
          <Switch>
            <Route path="/VR">
              <VRWorld />
            </Route>
            <Route path="/ThreeDee">
              <ThreeDee />
            </Route>
            <Route path="/network">
              <NetworkTester />
            </Route>
            <Route path="/bubbles">
              <BubblePopper />
            </Route>
            <Route path="/">
              <Link to="/VR">VR Demo</Link>
              <Link to="/ThreeDee">3D Demo</Link>
              <Link to="/network">Network Tester</Link>
              <Link to="/bubbles">Bubbles</Link>
            </Route>
          </Switch>
        </div>
      </Grommet>
    </Router>
  );
}

export default App;
