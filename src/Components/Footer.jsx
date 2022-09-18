import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png';

function Footer() {
  return (
    <div className='footer'><br /><br /><br /><br /><br />
        <div className="container">
            <footer>
        
                <div className="footer">
                    <div className="row">
                        <div className="col s12 m12 l4">
                            <div class="site-logo">
                                <Link to="/"><img src={Logo} className="footer-logo" alt="" /> <span> dulge</span></Link>
                            </div>

                            <div>
                                <p className="text-black" style={{fontSize: "1rem", lineHeight: "1.5rem", textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni fuga dolor sit amet consectetur adipisicing elit. Beatae obcaecati maiores quo quia. Ratione aperiam, velit fugit amet cumque aliquam commodi alias itaque sequi corrupti similique pariatur iusto eaque quae.</p>
                            </div>
                            
                        </div>

                        <div className="col s12 m4 l2 push-l1">
                                <h5 className="text-black text-darken-4 bolder">Resources</h5>
                                <ul className="light" style={{fontSize: "1.1rem", lineHeight: "2.4rem", marginLeft: "3%"}}>
                                    <li>
                                        <a href="#!" className="text-black">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Integration</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Support</a>
                                    </li>
                                </ul>
                        </div>

                        <div className="col s12 m4 l3 push-l2 push-m1">
                                <h5 className="text-black text-darken-4 bolder">Company</h5>
                                <ul className="light" style={{fontSize: "1.1rem", lineHeight: "2.4rem", marginLeft: "3%"}}>
                                    <li>
                                        <a href="#!" className="text-black">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">F.a.q</a>
                                    </li>
                                </ul>
                        </div>

                        <div className="col s12 m2 l2 push-l2 push-m2">
                                <h5 className="text-black text-darken-4 bolder">Contact</h5>
                                <ul  className="light" style={{fontSize: "1.1rem", lineHeight: "2.4rem", marginLeft: "3%"}}>
                                    <li>
                                        <a href="#!" className="text-black">help@dulge.app</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">hi@dulge.app</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-black">Twitter Support</a>
                                    </li>
                                    
                                </ul>
                        </div>
                    </div>
                    
                </div>
               <hr />
               <div className="row">
                    <div className="col l5 m6 s12">
                    <p className="text-black" style={{fontWeight:"bold", fontSize:"1.1rem"}}> <i class="fa-regular fa-copyright"></i> {(new Date().getFullYear())} by Darsh. All Rights Reserved</p>
                    </div>
                    <div className="col l4 m4 s12 push-l5 push-m3">
                    <ul>
                          
                           <li>
                               <a href="#!"><i class="fa fa-facebook footer-icon"></i></a>
                               <a href="#!"><i className="fa fa-instagram footer-icon"></i></a>
                               <a href="#!"><i className="fa fa-twitter footer-icon"></i></a>
                               <a href="#!"><i className="fa fa-whatsapp footer-icon"></i></a>
                          </li>
                       </ul>
                    </div>
               </div>
            </footer>
        </div>
               
    </div>
  )
}

export default Footer
