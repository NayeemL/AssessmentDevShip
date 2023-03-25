import React from "react";
import LoginPage from "./Pages/LoginPage/loginPage.js";
import RegisterPage from "./Pages/RegisterPage/registerPage.js";
import DashBoard from "./Pages/Dashboard/dashBoard.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} token={"user-token"}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
