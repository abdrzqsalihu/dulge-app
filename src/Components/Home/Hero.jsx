import { Link, useNavigate } from "react-router-dom"; // Update the import
import React, { useState } from 'react';
import hero from '../../assets/img/undraw_organizing_projects_re_9p1k.svg';
import { UserAuth } from '../../context/AuthContext';

function Hero() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleStartForFree = () => {
        navigate(`/signup?email=${email}`);
    }

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='hero'>
            <div className="container"><br /><br /><br /><br />
                <div className="row">
                    <div className="col l4 m12 s12">
                        <div className="intro">
                            <h2 className='bolder' style={{ lineHeight: "4rem" }}>
                                <span className="highlight-container">
                                    <span className="highlight" style={{ paddingRight: "15px" }}>Organize</span>
                                </span> your life with one tool.
                            </h2>
                            <p style={{ textAlign: "left" }}>
                                Remember everything and tackle any project with your notes, tasks, and schedule all in one place.
                            </p>
                            <div className='boxshadow'>
                                <form className="form-inline" action="">
                                    {user?.email ? (
                                        <>
                                            <Link to="/Dashboard" className="dashboard_cta">
                                                <span className="hover-underline-animation"> Dashboard </span>
                                                <svg fill="#1B89FA" viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </>):
                                        (<>
                                            <input 
                                                type="email"
                                                id="email"
                                                placeholder="Enter email"
                                                className="input"
                                                name="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <button type="button" className='btn bold z-depth-0' onClick={handleStartForFree}>Start for free</button>
                                        </>)
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col l7 m12 s12 push-l1">
                        <img src={hero} alt="task-manager" className='responsive-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
