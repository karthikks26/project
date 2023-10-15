import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
