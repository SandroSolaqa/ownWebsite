import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
 import Home from './pages/pages/Home/Home';
// import Appliances from './pages/Dashboard/Appliances';
// import Account from './pages/Account/login';
// import About from './pages/About/About';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import ContactInfo from './pages/pages/Contacts/Contacts';


// import Signup from './pages/Account/Signup';
// import infoContact from './pages/pages/Contacts/Contacts.js';

function App() {
  return (
    <div className="page-row">
    <Navbar />
      <Router>
        <Routes>
           {/* <Route path="/Appliances" element={
              <div>
                <Navbar />
                <Appliances />
              </div>
            }
          />
          <Route path="/Account" element={
              <div>
                <Account />
              </div>
            }
          /> */}
          
          {/* <Route path="/About" element={
              <div>
                <Navbar />
                <AboutMe />
              </div>
            }
          /> */}
          <Route path="/Contacts" element={
              <div>
                {/* <Navbar /> */}
                <ContactInfo />
              </div>
            }
          /> 
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Pages/Home/Navbar';
// import Home from './Pages/Home/Homescreen';
// import DayNightToggle from './Pages/Home/Day-night-toggle/DayNightToggle';
// import './App.css';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

// function App() {
//   const [isDayMode, setDayMode] = useState(true);

//   const toggleMode = () => {
//     setDayMode((prevMode) => !prevMode);
//   };

//   return (
//     // <div className={`App ${isDayMode ? 'day' : 'night'}`}>
//       <Router>
//         <div>
//           {/* <DayNightToggle isDayMode={isDayMode} toggleMode={toggleMode} /> */}
//           <Navbar />
//           <Switch>
//             <Route path="/" element={<Home />} />
//             <Route path="*" element={<div>404 Not Found</div>} />
//           </Switch>
//         </div>
//       </Router>
//     // </div>
//   );
// }

// export default App;
