import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';

const Rocket = () => <div>Rockets content</div>;
const Mission = () => <div>Missions content</div>;
const Profile = () => <div>Profile content</div>;

const App = () => (
  <Routes>
    <Route path='/' element={}
  </Routes>
  <div className="app">
    <Logo />
    <Navbar />
  </div>
);

export default App;
