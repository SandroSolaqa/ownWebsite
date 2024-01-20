import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/pages/Home/Home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import ContactInfo from './pages/pages/Contacts/Contacts';
import Projects from './pages/pages/Projects/Projects';
import Resume from './pages/pages/Resume/Resume';
import About from './pages/pages/About/About';

function App() {
  return (
    <div className="page-row">
      <Navbar />
      <Router >
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Use the Navigate component to redirect to the Home page */}
                <Navigate to="/Home" replace />
              </div>
            }
          />
          <Route
            path="/Home"
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route
            path="/About"
            element={
              <div>
                <About />
              </div>
            }
          />
          <Route
            path="/Projects"
            element={
              <div>
                <Projects />
              </div>
            }
          />
          <Route
            path="/Resume"
            element={
              <div>
                <Resume />
              </div>
            }
          />
          <Route
            path="/Contacts"
            element={
              <div>
                <ContactInfo />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
