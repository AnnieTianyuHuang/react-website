import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'; // Adjust the path if necessary
import AboutUs from './AboutUs'; // Adjust the path if necessary
import FavVideos from './FavVideos'; // Adjust the path if necessary
import Members from './Members'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/videos" element={<FavVideos />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
