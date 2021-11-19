import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components";
import { Main, Now } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/now" element={<Now />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
