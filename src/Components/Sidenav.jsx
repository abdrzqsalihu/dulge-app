import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from "../assets/img/logo.png";
import { UserAuth } from "../context/AuthContext";

function Sidenav() {
  const link_color = {
    color: "#1f1f1f",
    fontWeight: "500",
  };

  const navigate = useNavigate();

  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});

    // Add an event listener to close the sidebar when a link is clicked
    const sidenavLinks = document.querySelectorAll("#slide-out li a");
    sidenavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const sidenavInstance = M.Sidenav.getInstance(sidenav);
        sidenavInstance.close();
      });
    });
  }, []);

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sidebar hide-on-large-only">
      <div className="row">
        <div className="col s6">
          <a
            href="#mobilemenu"
            data-target="slide-out"
            className="sidenav-trigger"
          >
            <i className="material-icons text-black">menu</i>
          </a>
        </div>
        <div className="site-logo-sm col s6 pull-s2">
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              width: "15rem",
              height: "50px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} className="logo" alt="" />{" "}
              <p
                style={{
                  position: "absolute",
                  marginTop: "6px",
                  marginLeft: "45px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Dulge
              </p>
            </Link>
          </div>
        </div>
      </div>

      <ul id="slide-out" className="sidenav white">
        <li>
          <Link to="/about" style={link_color}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/" style={link_color}>
            Solution
          </Link>
        </li>
        <li>
          <Link to="/" style={link_color}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/" style={link_color}>
            Resources
          </Link>
        </li>
        <li>
          {user?.email ? (
            <Link
              to="/Dashboard"
              className="btn login_btn z-depth-0 panel_btn"
              style={{ border: "none !important" }}
            >
              Panel
            </Link>
          ) : (
            <Link to="/signin" className="btn login_btn z-depth-0">
              Log In
            </Link>
          )}
        </li>
        <li>
          {user?.email ? (
            <a className="btn start_btn z-depth-0" onClick={handleSignOut}>
              Logout
            </a>
          ) : (
            <Link to="/signup" className="btn start_btn z-depth-0">
              Start for Free
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
