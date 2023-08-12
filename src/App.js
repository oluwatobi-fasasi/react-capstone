import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import MissionPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';
import Rocket from './pages/RocketsPage';
import Dragons from './pages/DragonsPage';
import './app.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rocket />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/missions" element={<MissionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
