import React from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import {Home} from './routes/Home';
import {Lobby} from './routes/Lobby';
import {Gameplay} from './routes/Gameplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/gameplay" element={<Gameplay />} />
      </Routes>
    </Router>
    
  );
}

export default App;
