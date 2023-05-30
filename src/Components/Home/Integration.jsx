import React from 'react'
import integration from '../../assets/img/undraw_product_iteration_kjok.svg'
function Integration() {
  return (
    <div className='integration'><br /><br /><br /><br /><br /><br />
        <div className="container">
            <div className="row">
                <div className="col l6 m6 s12">
                <div className='integration-adjust'>
                  <img src={integration} alt="integration-svg" className='responsive-img' />
                  </div>
                </div>
                <div className="col l6 m6 s12 push-l1"><br /><br />
                <i className="fa-regular fa-calendar bg-blue white-text" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                <h3 className='bolder'> Easily <span className="highlight-containers text-blue"><span className="highlights">integrate</span></span> with all your favourite tools</h3>
                <p style={{fontSize: "1.1rem", lineHeight: "2rem"}}>Dulge free task management software lets you keep all your task, documents, and conversation in a single centralized hub. Storing important information together in your chart tool means you can always find your project's latest files, chats, and updates.</p>
                <button id='button' className="cta">
                  <span>Learn more</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Integration
