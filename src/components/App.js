import React from 'react';
import Music from './Music';
const App = ({ children }) => (
  <div>
  <header>
  <h1>Keyboard Music</h1>
  </header>
  <section>
  <Music/>
  </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
