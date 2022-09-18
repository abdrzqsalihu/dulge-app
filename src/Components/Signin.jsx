import React, { useEffect } from 'react'
import { GoogleButton } from 'react-google-button';
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'


function Signin() {
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
     <div className='center container'><br /><br /><br />
        <h4 className='bolder'>Sign In to Dulge</h4><br />
      <GoogleButton onClick={handleGoogleSignIn} className="center-content" />
    </div>
   </div>
  )
}

export default Signin
