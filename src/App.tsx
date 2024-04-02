import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMenu from "./pages/HomeMenu/HomeMenu";
import MainPage from "./pages/MainPage/MainPage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomeMenu />} />
            <Route path="/matjib" element={<HomeMenu />} />
            <Route path="/travel" element={<HomeMenu />} />
            <Route path="/camping" element={<MainPage />} />
            <Route path="/cafe" element={<HomeMenu />} />
          </Routes>
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;
