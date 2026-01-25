import { useState, useRef } from 'react';
import Ballpit from './Background/Background';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';

import './App.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import About from './About/About';
import Layout from './Layout/Layout';
import GameDetails from './GamesDetail/GamesDetail';
import Games from './Games/Games';
import Contact from './Contact/Contact';

function AppContent() {
  
 
  // Show Ballpit ONLY on home page ('/')
  const showBallpit = location.pathname === '/';

  return (
    <div className="app-container">
   
      
      <Routes>  
        <Route path="/" element={<Layout />} /> 
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;