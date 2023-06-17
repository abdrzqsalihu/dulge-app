import React from 'react'
import taskmanager from '../../assets/img/undraw_working_re_ddwy.svg'
import trackteam from '../../assets/img/undraw_co-working_re_w93t.svg'

function Compartment() {
  return (
    <div className='compartment'><br /><br /><br /><br /><br /><br />
        <div className="container">
            <div className="row">
                <div className="col l6 m6 s12">
                  <div  className='compartment-adjust-left'>
                  <img src={taskmanager} alt="task-manager-svg" className='responsive-img' />
                  </div>
                </div>
                <div className="col l5 m5 s12 push-l1"><br />
                <div className='compartment-adjust'>
                <i className="fa-regular fa-calendar bg-blue white-text" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                <h3 className='bolder'> A <span className="highlight-containers text-blue"><span className="highlights">task manager</span></span> you can trust for life saving.</h3>
                <p style={{fontSize: "1.1rem", lineHeight: "2rem", textAlign:"justify"}}>Dulge free task management software lets you keep all your task, documents, and conversation in a single centralized hub. Storing important information together in your chart tool means you can always find your project's latest files, chats, and updates.</p>
                </div>
                </div>
            </div>
           <div className='hide-on-small-only'> <br /><br /><br /><br /><br /><br /><br /></div>
            <div className="row">
                <div className="col l5 m5 12"><br /><br /><br /><br />
               <div className="compartment-adjust">
               <i className="fa-regular fa-clock bg-blue white-text" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                <h3 className='bolder'> Track your team work, hit every <span className="highlight-containers text-blue"><span className="highlights">dealine.</span></span></h3>
                <p style={{fontSize: "1.1rem", lineHeight: "2rem", textAlign:"justify"}}>Measure work time at the office and on th go via desktop and mobile apps for IOS and Android. The various Timesheet views allow you to view, add, and edit times entries with only a few clicks. Monitor everything you're doing on your computer without having to start and stop the timer.</p>
               </div>
                </div>
                <div className="col l6 m6 12 push-l1">
                  <div className='compartment-adjust-right'>
                    <img src={trackteam} alt="track-team-svg" className='responsive-img' />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compartment