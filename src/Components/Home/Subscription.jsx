import React from 'react'

function Subscription() {
  return (
    <div className='subscription'><br /><br />
      <section className='bg-black'><br /><br />
            <div className="container white-text">
                <div className="row">
                    <div className="col l6 m6 s12">
                      <div className='subscription-adjust'>
                      <h3 className='bolder' style={{lineHeight: "3.5rem"}}><span class="subscription-highlight-container"><span class="highlight" style={{paddingRight:"15px"}}>Get started </span></span> with us today.</h3>
                      <p  style={{fontSize: "1.1rem", lineHeight: "2.1rem"}} className="light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet laudantium rem reprehenderit tempora a quis, magni ipsam adipisci. Sequi?</p>
                      </div>
                    <br />
                    </div>
                    <div className="col l6 m6 s12 push-l2"><br /><br />
                      <div className='supscription-adjust-input'>
                      <form class="subscription-form-inline" action="">
                            <input type="email" id="email" placeholder="Enter email" className='input' name="email" required  />
                            <button type="submit" className='btn bold z-depth-0'>Start for free</button>
                        </form>
                      </div>
                    </div>
                </div>   
            </div><br />
      </section>
    </div>
  )
}

export default Subscription
