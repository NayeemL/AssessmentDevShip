import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"

function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="home_page">
      <h1>welcome My Dashboard</h1>
      <br />
      <button type="submit" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default DashBoard;
