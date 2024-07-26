import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/privacy";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Privacy />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
