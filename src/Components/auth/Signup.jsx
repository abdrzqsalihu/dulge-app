import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { auth } from '../../firebase';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async() => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
      // setErrorMessage(error.message);
      setErrorMessage(getErrorMessage(error.code));
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
      // setErrorMessage(error.message);
      setErrorMessage(getErrorMessage(error.code));
    });
  };

  useEffect(() => {
    if (user != null) {
        navigate('/Dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user]);

  useEffect(() => {
    // Add event listener to capture errors from the console
    const handleError = (event) => {
      const { message } = event;
      setErrorMessage(message);
    };
    window.onerror = handleError;

    // Clean up the event listener when the component unmounts
    return () => {
      window.onerror = null;
    };
  }, []);

  const getErrorMessage = (errorCode) => {
    let errorMessage = '';
    if (errorCode === 'auth/email-already-in-use') {
      // Handle user not found error
      errorMessage = 'Email Already in Use.';
    } else if (errorCode === 'auth/weak-password') {
      // Handle wrong password error
      errorMessage = 'Password should be at least 6 characters';
    } else if (errorCode === 'auth/invalid-api-key') {
      // Handle invalid API key error
      errorMessage = 'Invalid API key. Please contact support for assistance.';
    } else {
      // Handle other errors
      errorMessage = 'An error occurred. Please try again later.';
    }
    
    return errorMessage;
  };
  
  return (
    
   <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <div className="login_container"> 
          <div className="login_form-container">
            <div className="login_form">
              <div>
                  <h2 className='bolder'>Create an account!</h2>
                  <p style={{color: "#696969", marginBottom: "25px", textAlign:"left"}}>Sign up to Unlock the power of task management.</p> 
                    {/* {errorMessage && <p>Error: {errorMessage}</p>} */}
                    {errorMessage && (
                      <div className="error-message">
                        <p style={{color: "red", textAlign:"left", marginTop:"-12px", fontWeight:"bold"}}>{errorMessage}</p>
                      </div>
                    )}
                  <button onClick={handleGoogleSignIn} type="submit" className="google_signin_btn"> <img width="28" height="28" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> Sign up with Google</button>  <br /><br />
                  <div className="text-with-lines">
                    <div className="line"></div><div className="line-text">or</div><div className="line"></div>
                  </div>
              </div>

              <form onSubmit={handleSignUp}> <br />
                {/* <h2>Login</h2> */}
                <div className="input-container">
                  <input placeholder="Name" className="input-field" type="text" />
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container">
                  <input placeholder="Email" className="input-field" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <span className="input-highlight"></span>
                </div>
          
                <div className="input-container">
                  <input placeholder="Password" className="input-field" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span className="input-highlight"></span>
                </div>
                <div className="row" style={{marginTop: "15px"}}>
                  <div className="col">   
                  <label className="checkbox-container">
                    <input type="checkbox" required /><div className="checkmark"></div><span className="checkbox-label">I agree to the <a href="" style={{color: "#696969", fontWeight:"bold", textDecoration:"underline"}}>Terms & Conditions</a></span> 
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
            <Link to="/" style={{textDecoration:"none"}}><img src={Logo} className="logo" alt="" /> <p style={{position: "absolute", marginTop:"21px", marginLeft:"45px", fontWeight:"bold", fontSize:"20px"}}>Dulge</p></Link>
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
