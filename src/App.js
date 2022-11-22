import React from 'react';

import Container from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Container />
  </div>
);

export default App;
