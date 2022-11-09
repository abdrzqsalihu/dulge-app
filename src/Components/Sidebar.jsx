import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from '../assets/img/logo.png';
import {UserAuth} from '../context/AuthContext'

function Sidebar() {
    const link_color = {
        color: "#1f1f1f",
        fontWeight: "500",
    };

    useEffect(() => {
      let sidenav = document.querySelector("#slide-out");
      M.Sidenav.init(sidenav, {});
    }, []);

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

  return (
  <div className='sidebar hide-on-large-only'>
       <div className="row">
      <div className="col s6">
      <a href="#mobilemenu" data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons text-black">menu</i>
        </a>
      </div>
        <div className="site-logo-sm col s6 pull-s2">
            <Link to="/"><img src={Logo} className="logo" alt="" />dulge</Link>
        </div>
       </div>
        

        <ul id="slide-out" class="sidenav white">  
            <li><Link to="/about" style={link_color} >Product</Link></li>
            <li><Link to="/" style={link_color} >Solution</Link></li>
            <li><Link to="/" style={link_color} >Pricing</Link></li>
            <li><Link to="/" style={link_color} >Resources</Link></li>   
            <li>{user?.displayName ? ( <Link to="/Dashboard" className="btn login_btn z-depth-0 panel_btn" style={{border: "none !important"}}>Panel</Link> ) : ( <Link to="/signin"  className="btn login_btn z-depth-0">Log In</Link>)}
            </li>
                        <li>
                        {user?.displayName ? ( <a href="/" className="btn start_btn z-depth-0" onClick={handleSignOut}>Logout</a> ) : (  <Link to="/"  className="btn start_btn z-depth-0">Start for Free</Link>)}
                           </li>   
        </ul>
   
  </div>

  )

}

export default Sidebar