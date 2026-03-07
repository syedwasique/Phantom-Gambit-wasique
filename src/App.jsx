import React, { useState, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';
import Navbar from './Navbar/Nav';
import Footer from './footer/footer'; // Import Footer

import './App.css';
const SignIn = lazy(() => import('./SignIn/SignIn'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Layout = lazy(() => import('./Layout/Layout'));
const GameDetails = lazy(() => import('./GamesDetail/GamesDetail'));
const Games = lazy(() => import('./Games/Games'));

function AppContent() {
  const location = useLocation();

  return (
    <div className="main-container">
      {/* Navbar is now visible on ALL pages */}
      <Navbar />

      {/* Main content area with proper spacing */}
      <main className="main-content">
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:gameId" element={<GameDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer is now visible on ALL pages */}
      <Footer />
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