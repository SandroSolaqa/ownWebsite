// DayNightToggle.js
import React from 'react';
import './DayNightToggle.css';

const DayNightToggle = ({ isDayMode, toggleMode }) => {
  return (
    <div className={`day-night-toggle ${isDayMode ? 'day' : 'night'}`}>
      <h1>Toggle Day/Night Mode</h1>
      <p>Click the button to toggle between Day and Night mode.</p>
      <button className= 'btn-primary'id="toggle"  onClick={toggleMode}>
        {isDayMode ? 'Night Mode' : 'Day Mode'}
      </button>
    </div>
  );
};

export default DayNightToggle;



// // DayNightToggle.js
// import React, { useState, useEffect } from "react";
// import Toggle from "react-toggle";
// import "react-toggle/style.css"; // Import the styles for react-toggle

// export const DarkModeToggle = () => {
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     if (isDark) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [isDark]);

//   return (
//     <Toggle
//       checked={isDark}
//       onChange={({ target }) => setIsDark(target.checked)}
//       icons={{ checked: "🌙", unchecked: "🔆" }}
//       aria-label="Dark mode toggle"
//     />
//   );
// };
// export default DarkModeToggle;