import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import gif from "../assets/img/cooking.gif";

function Dashboard() {
  const { user } = UserAuth();
  // console.log(user.email);
  return (
    <div>
      <div style={{ margin: "auto", maxWidth: "95%" }}>
        <br />
        {/* <h4>Dashboard</h4> */}
        <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>
          Welcome Back <span style={{ fontSize: "1.6rem" }}>👋🏽</span>
        </p>
        {/* {user?.displayName && <p style={{fontWeight: "600", fontSize:"1.6rem", marginTop: "-0.1rem"}}>{user.displayName}</p>}
        <p style={{fontWeight: "600", fontSize:"1.4rem", marginTop: "-0.1rem"}}>{user?.displayName &&  <p>{user.email}</p> }</p> */}
        {(user?.displayName || user?.email) && (
          <p
            style={{
              fontWeight: "600",
              fontSize: user?.displayName ? "1.6rem" : "1.4rem",
              marginTop: "-15px",
            }}
          >
            {user.displayName || user.email}!
          </p>
        )}
        <hr
          style={{ height: "1px", border: "none", backgroundColor: "#d3d3d3" }}
        />
        <div style={{ margin: "auto" }} className="center">
          {" "}
          <br />
          <br />
          <h5
            style={{
              textShadow: "2px 2px 5px #1B89FA",
              fontSize: "1.8rem",
              fontWeight: "600",
            }}
          >
            Omor I still dey cook!👨🏽‍🍳🍳
          </h5>{" "}
          <br />
          <img
            src={gif}
            style={{ width: "94%" }}
            className="hide-on-large-only"
            alt=""
          />
          <img
            src={gif}
            style={{ width: "40%" }}
            className="hide-on-med-and-down"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
