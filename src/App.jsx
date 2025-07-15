import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
