import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <div>
    <BrowserRouter>
      <Navigation />
      <Route exact path = '/Home'><Home /></Route>
      <Route path = '/About'><About /></Route>
      <Route path = '/Contact'><Contact /></Route>
    </BrowserRouter>
  </div>
);

export default App;