import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .get("https://demo.nriva.tech/Core/user", config)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [config]);

  const handleClick = () => {
    alert("confirm Logout");
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <header>
        <div class="logo">
          Wit<span>arist</span>
        </div>
      </header>
      <div class="nav-btn">Menu</div>
      <div class="container">
        <div class="sidebar">
          <nav>
          
              Wit<span>arist</span>
           
            <ul>
              <li class="active">Dashboard</li>
            </ul>
          </nav>
        </div>

        <div class="main-content">
          <h1>Dashboard</h1>
          <p>Welcome to Witarist portal , {data.name}!</p>
          <div class="panel-wrapper">
            <div class="panel-head">User Details</div>
            <div class="panel-body">
              USER-NAME:{" "}
              <span style={{ color: "green" }}>
                {data.username}
              </span>
            </div>
            <div class="panel-body">
              PASSWORD:
              <span style={{ color: "green" }}>
              {"**********"}
              </span>
            </div>
            <div class="panel-body">
              <button
                class="active"
                style={{ backgroundColor: "tomato",padding:"10px",color:"white",border:"none",borderRadius:"10px"}}
                onClick={handleClick}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
