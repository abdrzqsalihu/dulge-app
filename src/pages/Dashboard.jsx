import React, { useState, useEffect, useRef } from "react";
import { UserAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = UserAuth();
  // console.log(user.email);
  return (
    <div>
      <div className="center">
        <br />
        <h4>Dashboard</h4>
        {user?.displayName && <p>Welcome, {user.displayName}</p>}
        <p>Welcome, {user?.email}</p>
      </div>
    </div>
  );
}

export default Dashboard;
