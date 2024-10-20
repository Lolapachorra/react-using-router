import React from "react";

import Navigation from "./navigation"
import { wrapperStyle } from "./styles";
import { Home, Aperture, ShutterSpeed, ISO } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div style={wrapperStyle.wrapper}>
        <Navigation />
        <h1>Camera Tips</h1>
        <Routes>
          <Route exact path="/aperture" element={ <Aperture /> } />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shutterSpeed" element={ <ShutterSpeed />} />
          <Route exact path="/iso" element={ <ISO />} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
};

export default App;
