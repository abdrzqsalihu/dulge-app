import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from "../assets/img/logo.png";
import { sidebarLinks } from "../constant/ContentConstants";

function Sidebar() {
  const link_color = {
    color: "#fff",
    fontWeight: "600",
    marginLeft: "5px",
  };

  // Using LogOut On the page
  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebarOnOutsideClick = (event) => {
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.classList.contains("toggle-btn")
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", closeSidebarOnOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <div className={`${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="toggle-nav-div">
          {/* <button className="toggle-btn" onClick={toggleSidebar}> */}
            <i
              className="fa-solid fa-bars-staggered toggle-btn text-dark-blue" onClick={toggleSidebar}
            ></i>
          {/* </button> */}
        </div>
        <div
          className={`custom-sidebar bg-black ${isSidebarOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          {/* Sidebar content */}

          <div
            style={{
              // position: "absolute",
              top: "0px",
              left: "10px",
              width: "20rem",
              height: "50px",
              marginLeft: "20%",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} className="logo" alt="" />{" "}
              <p
                style={{
                  position: "absolute",
                  marginTop: "20px",
                  marginLeft: "45px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Dulge
              </p>
            </Link>
          </div>

          <ul>
            {" "}
            <br /> <hr />
            <br />
            {sidebarLinks.map((link) => (
              <li key={link.id}>
                <Link to={`/${link.id}`} style={link_color}>
                  <i dangerouslySetInnerHTML={{ __html: link.icon }} />{" "}
                  <span style={{ marginLeft: "5px" }}>{link.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="dashboard-btn" onClick={handleSignOut}>
                <i className="fa-solid fa-right-from-bracket"></i> Log Out
              </button>
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
