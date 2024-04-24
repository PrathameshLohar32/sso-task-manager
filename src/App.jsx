import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './components/Home';
import About from "./components/About";
import Profile from "./components/Profile";
import App1 from "./App1";
import React, { useState,useEffect, useRef } from "react";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const { user, isAuthenticated } = useAuth0();

  const profileSectionRef = useRef(null);

  const scrollToProfile = () => {
    profileSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Router>
      <Navbar scrollToTarget={scrollToProfile} />
      {/* {isAuthenticated && (
        <div className="container d-flex justify-content-center mt-4">
          <h3>Hello {user.name} Login Successful</h3>
        </div>
      )} */}
      {/* <Hero/> */}
      {isAuthenticated && <App1/>}
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/App1" element={<App1 />} />

      </Routes>
      <section ref={profileSectionRef}>
      <Profile></Profile>
      </section>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
