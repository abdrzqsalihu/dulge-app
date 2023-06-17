import React, { useEffect, useState } from 'react'
import { GoogleButton } from 'react-google-button';
import {UserAuth} from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

function Signup() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async() => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
        navigate('/Dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user]);
  
  return (
    
   <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <div className="login_container"> 
          <div className="login_form-container">
            <div className="login_form">
              <div>
                  <h2 className='bolder'>Create an account!</h2>
                  <p style={{color: "#696969", marginBottom: "25px", textAlign:"left"}}>Sign up to Unlock the power of task management.</p> 
                  <button onClick={handleGoogleSignIn} type="submit" className="google_signin_btn"> <img width="28" height="28" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> Sign up with Google</button>  <br /><br />
                  <div className="text-with-lines">
                    <div className="line"></div><div className="line-text">or</div><div className="line"></div>
                  </div>
              </div>

              <form> <br />
                {/* <h2>Login</h2> */}
                <div className="input-container">
                  <input placeholder="Name" className="input-field" type="text" />
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container">
                  <input placeholder="Email" className="input-field" type="text" />
                  <span className="input-highlight"></span>
                </div>
          
                <div className="input-container">
                  <input placeholder="Password" className="input-field" type="text" />
                  <span className="input-highlight"></span>
                </div>
                <div className="row" style={{marginTop: "15px"}}>
                  <div className="col">   
                  <label className="checkbox-container">
                    <input type="checkbox" /><div className="checkmark"></div><span className="checkbox-label">I agree to the <a href="" style={{color: "#696969", fontWeight:"bold", textDecoration:"underline"}}>Terms & Conditions</a></span> 
                  </label>
                  </div>
                </div>

                 <br />
                  <button type="submit" className="signin_btn">Create account</button>
              </form>
                  <div className='text-center' style={{fontSize:"14px"}}><br />
                  <p style={{color: "#696969"}}>Already have an account? <Link to="/signin" style={{textDecoration: "underline", color: "#1B89FA", fontWeight: "bold"}}> Sign in</Link></p>
                  </div>
            </div>
          </div>
          
          <div className="login_image hide-on-small-and-down"></div>
          {/* Logo  */}
          <div className="site-logo" style={{ position: "absolute", top: "0px", left: "10px", width: "20rem", height: "50px" }}>
            <Link to="/" style={{textDecoration:"none"}}><img src={Logo} className="logo" alt="" /> <p style={{marginTop:"18px"}}>Dulge</p></Link>
          </div>
      </div>







     {/* <div className='center container'><br /><br /><br />
        <h4 className='bolder'>Sign In to Dulge</h4><br />
      <GoogleButton onClick={handleGoogleSignIn} className="center-content" />
    </div> */}
  </div>
  )
}

export default Signup
