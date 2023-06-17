import React from 'react'
import mobileimg from '../../assets/img/undraw_mobile_posts_re_bpuw.svg'
import googlePlayBtn from '../../assets/img/Google Play.png'
import appleStoreBtn from '../../assets/img/Google Play.png'


function DownloadAds() {
  return (
    <div className='DownloadAds'><br /><br /><br /><br /><br />
        <div className="container">
        <div className="row">
                <div className="col l4 m5 12 push-l1"><br /><br /><br />
              <div className='download-adjust'>
              <i className="fa-solid fa-mobile-screen bg-blue white-text" style={{padding: "12px", borderRadius: "50%", fontSize: "22px"}}></i>
                <h3 className='bolder'> Project <span className="highlight-containers text-blue"><span className="highlights">Management </span></span> is mobile friendly!</h3>
                <p style={{fontSize: "1.1rem", lineHeight: "2rem", textAlign:"left"}}>Stay connected with your team with Dulge for IOS and Android. Have access to all integrations and extensions for desktop,browser.</p>
                <div className="col l6 m6 s6">
                    <a href="#!"> <img src={appleStoreBtn}  style={{width: "80%"}} alt="" /></a>
                </div>
                <div className="col l6 m6 s6">
                    <a href="#!"><img src={googlePlayBtn}  style={{width: "80%"}} alt="" /></a>
                </div><br /><br /><br /><br /><br />
                </div>
              </div>
                <div className="col l6 m6 12 push-l3 push-m1">
                  <div className='download-adjust-img'>
                    <img src={mobileimg} alt="track-team-svg" className='responsive-img' />
                  </div>
                </div>
            </div>
        </div><br /><br />
    </div>
  )
}

export default DownloadAds
