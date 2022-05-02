import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
