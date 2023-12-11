import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Titulo1 from "./Content/Titulo1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/Nature" Component={Titulo1} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
