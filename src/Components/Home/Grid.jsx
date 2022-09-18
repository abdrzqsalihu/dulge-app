import React from 'react'

function Grid() {
  return (
    <div className='grid'><br /><br /><br />
    
      <section className='bg-black'><br /><br /><br />
      <div className="container center white-text">
        <h3 className='bolder'>An app built for <span class="highlight-container"><span class="highlight">your needs. </span></span> </h3><br />
        <p className='width-full' style={{width: "60%", margin: "auto", fontSize: "1.1rem"}}>Dulge Project Management helps you stay in full control of all your projects and keeps track of all the moving parts.</p>
        <br /><br /><br />
        <div className="row">
            <div className="col l3 m6 s12" style={{height: "200px"}}>
              <div className='grid-adjust'>
                    <i class="fa-regular fa-folder-open fa-4x"></i>
                    <h5 className='bold'>Stay Organized</h5>
                    <p>Resource calender and Reports give you the much needed visibility of your team's current, past and future.</p><br /><br /><br />
              </div>
            </div>
            <div className="col l3 m6 s12" style={{height: "200px"}}>
                <div className='grid-adjust'>
                    <i class="fa-solid fa-clipboard-list fa-4x"></i>
                    <h5 className='bold'>Manage your task</h5>
                    <p>Know who is available for work. Use timesheets to track the time on projects.</p><br /><br /><br />
                </div>
            </div>
            <div className="col l3 m6 s12" style={{height: "200px"}}>
                <div className='grid-adjust'>
                      <i class="fa-regular fa-message fa-4x"></i>
                      <h5 className='bold'>Centre communication</h5>
                      <p>You can plan, schedule, discuss and manage your projects with our chat panel</p><br /><br /><br />
                </div>
            </div>
            <div className="col l3 m6 s12" style={{height: "200px"}}>
                <div className='grid-adjust'>
                    <i class="fa-regular fa-bell fa-4x"></i>
                    <h5 className='bold'>Meet your deadline</h5>
                    <p>Create your dulge customs chart online by simply adding taks in your project.</p><br /><br /><br />
                </div>
            </div>
        </div>
        </div><br /><br /><br />
      </section>
    </div>
  )
}

export default Grid
