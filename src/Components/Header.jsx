import { Link } from "react-router-dom";
import React from 'react'
import Logo from '../assets/img/logo.png';
import Sidebar from './Sidebar';
import {UserAuth} from '../context/AuthContext'

function Header() {
    const link_color = {
        color: "#1f1f1f",
        fontWeight: "500",
    };

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='header'>
        <nav className='z-depth-0 transparent'>
            
            <Sidebar/>
            
            <div className="row hide-on-med-and-down">

                <div className="col l2 s12 m4 push-l2">
                    <div className="site-logo">
                        {/* <Link to="/"><img src={Logo} className="logo" alt="" />Dulge</Link> */}
                        <div style={{ position: "absolute", top: "0px", left: "10px", width: "20rem", height: "50px" }}>
                            <Link to="/" style={{textDecoration:"none"}}><img src={Logo} className="logo" alt="" /> <p style={{position: "absolute", marginTop:"6px", marginLeft:"45px", fontWeight:"bold", fontSize:"22px"}}>Dulge</p></Link>
                        </div> 
                    </div>
                </div>

                <div className="col l5 s12 m4 center push-l2">
                    <ul>
                        <li><Link to="/about" style={link_color} >Product</Link></li>
                        <li><Link to="/" style={link_color} >Solution</Link></li>
                        <li><Link to="/" style={link_color} >Pricing</Link></li>
                        <li><Link to="/" style={link_color} >Resources</Link></li>
                    </ul>
                </div>

                <div className="col l4 m3 s12 push-l1">
                    <ul>
                        <li>
                            {user?.email ? ( <Link to="/Dashboard" className="btn login_btn z-depth-0 panel_btn" style={{border: "none !important"}}>Panel</Link> ) : ( <Link to="/signin"  className="btn login_btn z-depth-0">Log In</Link>)}
                           
                        </li>
                        <li>
                        {user?.email ? ( <button className="btn start_btn z-depth-0" onClick={handleSignOut}>Logout</button> ) : (  <Link to="/signup"  className="btn start_btn z-depth-0">Start for Free</Link>)}
                           </li>   
                    </ul>
                </div>

            </div>
        </nav>    
    </div>

  )

}

export default Header