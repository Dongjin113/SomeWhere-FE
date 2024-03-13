import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMenu from "./pages/HomeMenu/HomeMenu";
import MainPage from "./pages/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/matjib" element={<HomeMenu />} />
          <Route path="/travel" element={<HomeMenu />} />
          <Route path="/camping" element={<MainPage />} />
          <Route path="/cafe" element={<HomeMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
