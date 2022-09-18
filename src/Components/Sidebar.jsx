import { Link } from "react-router-dom";
import React, { useEffect } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from '../assets/img/logo.png';

function Sidebar() {
    const link_color = {
        color: "#1f1f1f",
        fontWeight: "500",
    };

    useEffect(() => {
      let sidenav = document.querySelector("#slide-out");
      M.Sidenav.init(sidenav, {});
    }, []);

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
        </ul>
   
  </div>

  )

}

export default Sidebar