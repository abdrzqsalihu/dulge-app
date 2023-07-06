import React from 'react'
import {UserAuth} from '../context/AuthContext';

function Dashboard() {

    
    const {user} = UserAuth();

    // Using LogOut On the page 
    //  const {logOut, user} = UserAuth();

    // const handleSignOut = async () => {
    //     try {
    //         await logOut()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
  return (
    <div>
        <div className='container center'><br />
            <h4>Dashboard</h4>
            <p>Welcome, {user?.displayName}</p>
            <p>Welcome, {user?.email}</p>
            {/* <button onClick={handleSignOut}>Log Out</button> */}
        </div>
    </div>
  )
}

export default Dashboard