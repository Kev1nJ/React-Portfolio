// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import AboutMe from './components/UI/AboutMe';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Resume from './components/UI/Resume';
import Footer from './components/UI/Footer';
import Navigation from './components/UI/Navigation';
import { useLocation } from "react-router-dom";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  const currentPage = useLocation().pathname;
  return (
    <>
      <Header/>
      <Navigation currentPage={currentPage} />
      <Footer/>

    </>
  );
}

export default App;
