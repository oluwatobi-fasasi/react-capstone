import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Mission from './pages/Missions';
import Profile from './pages/Profile';
import Rocket from './pages/Rockets';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rocket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Mission />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
