// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div>
      <Navbar />

      <Aboutme />

      <Project />

      <Footer />
    </div>
  );
}

export default App;
