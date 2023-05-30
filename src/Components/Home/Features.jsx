import React from 'react'

function Features() {
  return (
    <div className='features'><br /><br /><br />
        <section className='bg-gray'><br /><br /><br />
        <div className="container">
          
         <div className="center">
          <h3 className='bolder' style={{lineHeight: "3.5rem"}}><span className="feature-highlight-container"><span className="highlight" style={{paddingRight:"15px"}}>Features</span></span> that work for you </h3><br />
          <p className='width-full' style={{width: "60%", margin: "auto", fontSize: "1.1rem"}}>Dulge Project Management helps you stay in full control of all your projects and keeps track of all the moving parts.</p>
         </div>
           <br /><br />
           <div className="row">
              <div className="col l6 m6 s12 left">
                    <div className="custom-hoverable right-custom-hoverable">
                      <div className="card z-depth-0 feature-card">
                        <div className="card-content">
                          <div className='icon'><i className='fa-solid fa-clipboard-list fa-3x text-blue'></i></div>
                          <h5 className='bolder'>Invoice Maker</h5>
                          <p>See whether your time-off schedule overlaps with a teammate while applying for a review a time-off request.</p>
                        </div>
                      </div>
                    </div>

                  <div className="custom-hoverable right-custom-hoverable">
                    <div className="card z-depth-0 feature-card">
                      <div className="card-content">
                        <div className='icon'><i className='fa-solid fa-border-none fa-3x text-blue'></i></div>
                        <h5 className='bolder'>Widget Board</h5>
                        <p>Acces QuickBooks, Google Calender, Dropbox, Google Drive, OneDrive and Outlook all in one space.</p>
                      </div>
                    </div>
                  </div>

                  <div className="custom-hoverable right-custom-hoverable">
                    <div className="card z-depth-0 feature-card">
                      <div className="card-content">
                        <div className='icon'><i className='fa-solid fa-message fa-3x text-blue'></i></div>
                        <h5 className='bolder'>Chat Panel</h5>
                        <p>Chat with the team or external partners. Dulge supports 1:1 messages or team messages</p>
                      </div>
                    </div>
                  </div>
              </div>


              <div className="col l6 m6 s12 left">
                  <div className="custom-hoverable left-custom-hoverable">
                    <div className="card z-depth-0 feature-card">
                        <div className="card-content">
                        <div className='icon'><i className='fa-solid fa-file-circle-check fa-3x text-blue'></i></div>
                        <h5 className='bolder'>Integration</h5>
                        <p>Seamlessly integrate Dulge with modern and trusted tools of your workflow like Dropbox, and more.</p>
                        </div>
                    </div>
                  </div>

                  <div className="custom-hoverable left-custom-hoverable">
                    <div className="card z-depth-0 feature-card">
                      <div className="card-content">
                        <div className='icon'><i className='fa-solid fa-arrows-rotate fa-3x text-blue'></i></div>
                        <h5 className='bolder'>Backups</h5>
                        <p>A copy of a file or other item of data made  are saved in the cloud in case the original is lost or damaged. </p>
                      </div>
                    </div>
                  </div>

                  <div className="custom-hoverable left-custom-hoverable">
                    <div className="card z-depth-0 feature-card">
                      <div className="card-content">
                        <div className='icon'><i className='fa-solid fa-list-check fa-3x text-blue'></i></div>
                        <h5 className='bolder'>Task Board</h5>
                        <p>Break down any size projecr into customized tasks. </p>
                        </div>
                    </div>
                  </div>    
              </div>
            </div>

        </div><br /><br /><br />
        </section>
    </div>
  )
}

export default Features