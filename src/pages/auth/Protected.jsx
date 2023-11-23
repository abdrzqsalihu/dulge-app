import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Sidebar from "../../Components/Sidebar";
const Protected = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  // console.log(user.photoURL);
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <nav
          className="white z-depth-1"
          style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px", zIndex: "1" }}
        >
          <div style={{ maxWidth: "98%" }}>
            <div className="right" style={{ marginTop: "0.3%" }}>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  style={{
                    borderRadius: "50%",
                    width: "80%",
                    marginTop: "10%",
                    marginRight: "-50px",
                  }}
                  alt="User"
                />
              ) : (
                <i
                  className="fa-solid fa-circle-user text-black"
                  style={{ fontSize: "2rem" }}
                ></i>
              )}
            </div>
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
};

export default Protected;
