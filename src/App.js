import './App.css';
import React from 'react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppDrawer from './Components/AppDrawer';

function App() {
  return (
    <Router>
      <AppDrawer />
      <Footer />
    </Router>
  );
}

export default App;
