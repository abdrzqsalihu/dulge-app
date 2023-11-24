import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";

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

      </div>
    </div>
  );
}

export default Dashboard;
