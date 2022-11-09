import React from 'react'
import hero from '../../assets/img/undraw_organizing_projects_re_9p1k.svg'

function Hero() {
  return (
    <div className='hero'>
        <div className="container"><br /><br /><br /><br />
            <div className="row">
                <div className="col l4 m12 s12">
                   <div  className="intro">
                   <h2 className='bolder' style={{lineHeight: "4rem"}}> <span class="highlight-container"><span class="highlight" style={{paddingRight:"15px"}}>Organize</span></span> your life with one tool.</h2>
                    <p>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
                   <div className='boxshadow'>
                    <form class="form-inline" action="">
                        <input type="email" id="email" placeholder="Enter email" className='input' name="email" required  />
                        <button type="submit" className='btn bold z-depth-0'>Start for free</button>
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

export default Hero
