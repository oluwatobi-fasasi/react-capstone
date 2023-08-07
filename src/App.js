import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Rocket = () => <div>Rockets content</div>;
const Mission = () => <div>Missions content</div>;
const Profile = () => <div>Profile content</div>;

const App = () => (
  <BrowserRouter>
  <Logo />
  <Navbar />
  <Routes>
    <Route path="/" element={Rocket}>
      <Route index element={<Rockets />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Missions />} />
    </Route>
  </Routes>
</BrowserRouter>
);

export default App;
