import React from 'react'
import Logo from './img/logo.webp'
import About from './img/about.webp';

import Projecta from './img/project-1.webp';
import Projectb from './img/project-2.webp';
import Projectc from './img/project-3.webp';

import Servicea from './img/service_1.svg';
import Serviceb from './img/service_2.svg';
import Servicec from './img/service_3.svg';
import Serviced from './img/service_4.svg';

import Facebook from './img/1077041.png';
import Behance from './img/behance-64.png';
import Twitter from './img/twitter-64.png';
import Geography from './img/geography-64.png';
import PaperPlane from './img/paper-plane.png';
import FooterLogo from './img/footer_logo.webp';

import Blog1 from './img/blog_1.webp';
import Chat from './img/chat.png';
// import Love from './img/ClipKey_1293437.png';
import Clock from './img/clock.png';
import Heart from './img/heart.png';



import One from './img/1.webp'
import Two from './img/2.webp';
import Three from './img/3.webp';
import Four from './img/4.webp';





const index = () => {
    return (
        <div>
            <div className="container">
     
                        {/* Navbar */}
                    <div className="navbar">
                        <div className="logo">
                            <img src={Logo} alt="company logo" width="130"/>
                        </div>
                        <nav>
                            <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Pages</li>
                            <li>Contact Us</li>
                            </ul>
                        </nav>
                    </div> 


                    <div className="heading">
                        Dream<br/>
                            <span className="sub-heading">
                                Proparties<br/>Now In city
                            </span>
                    </div>
                    <p className="description">Lorem ipsum dolor sit consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>



                    <div className="about-container">

                
                    <div className="about-heading">
                        <div>
                            <hr className="line"/>
                        </div>
                        <div>
                        <h3><span>About</span> Us</h3>
                    </div>
                    </div>
      
                    <div className="about-description">
                        <img src={About} alt="Building"/>
                        <div className="about-content">
                            <h4>Hello City We are leader in proparties</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ips
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                                isuspendisse ultrices gravida. Risus.</p>
                            <button className="about-button">LEARN MORE</button>
                        </div>
                        <p className="demo-num-1">100<br/><sapn className="demo">PROJECT</sapn></p>
                        <p className="demo-num-2">300<br/><sapn className="demo">CLIENTS</sapn></p>
                        <p className="demo-num-3">150<br/><sapn className="demo">MEMBER</sapn></p>
                    </div>

                    </div>
                   
                    <div className="project-container">
                   
                    <div className="project-heading">
                        <div>
                            <h3><span>Our</span> Project</h3>
                        </div>
                        <div>
                            <hr className="line-project"/>
                        </div>
                        
                    </div>
                   

                    <div className="project-flexbox">
                        <div className="flex-1">
                            <div className="project-content flex-1">
                                <h4>Hello City We are leader in <span>Projects .</span></h4>   
                            </div>
                            <div className="button-items-project flex-1">
                                <button className="architecture-button">ARCHITECTURE</button>
                                <button className="interior-button">INTERIOR</button>
                                <button className="exterior-button">EXTERIOR</button>
                                <button className="drafting-button">DRAFTING LANDING</button>
                            </div>
                            <div className="img-a flex-1">
                                <img src={Projecta} height="100%" width="100%"/>
                                <div className="items-a">
                                    <h4>Exclusive Project</h4>
                                    <p>Etiam tortor aliquet habitant</p>
                                </div>
                            </div>

                        </div>
                        <div className="img-ab flex-1"> 
                            <div className="img-b">
                                <img src={Projectb} height="578.4px" width="100%"/>
                                <div className="items-b ">
                                    <h4>New Project</h4>
                                    <p>Etiam tortor aliquet habitant</p>
                                </div>
                            </div>

                            <div className="img-b">
                                <img src={Projectc} height="578.4px" width="100%"/>
                                <div className="items-b">
                                    <h4>New Project</h4>
                                    <p>Etiam tortor aliquet habitant</p>
                                </div>
                            </div>
                        </div>
                    </div>     

                    

                    </div>

                   

                    <div className="service-container">

                    
                    <div className="service-heading">   
                            <div>
                                <hr className="line-service"/>
                            </div>
                            <div>
                                <h3>Our <span>Services</span></h3>
                            </div>    
                    </div>
                   
                    <div className="service-description">
                        
                        <div className="service-content">
                            <div className="icons">

                                <div className="icon-column-a">
                                    <div className="flex-1">
                                        <div className="icon-a">
                                            <img src={Servicea} alt="logo-1"/>
                                            <div><h4> House<br/>Planning</h4></div>
                                            <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                            
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="icon-c">
                                            <img src={Servicec} alt="logo-3"/>
                                            <h4>Design<br/>Build</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon-column-b">
                                    <div className="flex-1">
                                        <div className="icon-b">
                                            <img src={Serviceb} alt="logo-2"/>
                                            <h4>House<br/>Build</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                        </div>
                                        <div className="icon-b">
                                            <img src={Serviced} alt="logo-2"/>
                                            <h4>Design &<br/>Build</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur elit seiusmod tempor incididunt</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>

                            <div className="service-details">
                                <h4>Hello City We are leader in proparties</h4>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipi
                                    scing elit, sed ips
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    isuspendisse ultrices gravida. Risus.</p>
                                <button className="service-button">LEARN MORE</button>
                            </div>
                            
                        </div>
                    </div>

                  

                    </div>


                  

                    <div className="luxuries-container">
                  
                    <div className="luxuries-heading">
                        <div className="head-lux">
                            <div>
                                <h3><span>Luxuries</span> Apartment</h3>
                            </div>
                            <div>
                                <hr className="line-luxuries"/>
                            </div>
                        </div>    
                    </div>
                   

                  
                    <div className="gallery">
                        <div className="photo-row">
                            <div className="photo-a">
                                <img src={One} alt="photo-1" width="100%" height="100%"/>
                            </div>
                            <div>
                                <div className="gallery-b">
                                    <div className="photo-b">
                                        <img src={Two} alt="photo-2" width="100%" height="100%"/>
                                    </div>
                                    <div className="photo-c">
                                        <img src={Three} alt="photo-3" width="100%" height="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="photo-d">
                            <img src={Four} alt="photo-4" width="100%" height="100%"/>
                        </div> 
                    </div>


            
                    </div>

            



                    <div className="blog-container">
                        
               
                    <div className="luxuries-heading">
                        <div className="head-lux">
                            <div>
                                <h3>Our <span>Blog</span></h3>
                            </div>
                            <div>
                                <hr className="line-luxuries"/>
                            </div>
                        </div> 
                    </div>
                      
                        <div className="blog-contents">
                            <div className="blogs">
                                <div className="blog-1 flex-1">
                                    <div className="blog-detail">
                                        <img src={Blog1} alt="blog1" height="294px" width="100%"/>
                                        <p className="blog-date"><span>APARTMENT </span>/ March 20, 2019</p>
                                        <h3 className="blog-heading">Doee light workout darkness that said good deep years very.</h3>
                                        <p className="blog-date"><img src={Chat} alt="comments" width="21px" height="21px"/> Mar 12 <img src={Heart} alt="like" width="21px" height="21px"/> 0 like </p>
                                    </div>
                                </div>
                                <div className="blog-col flex-1">
                                    <div className="blog-2">
                                        <div className="blog-detail">
                                            <p className="blog-date"><span>APARTMENT </span>/ March 20, 2019</p>
                                            <h3 className="blog-heading">light workout darkness that said.</h3>
                                            <p className="blog-date"><img src={Clock} alt="clock" width="21px" height="21px"/> Mar 12 <img src={Heart} alt="like" width="21px" height="21px"/> 0 like </p>
                                        </div>
                                    </div>
                                    <div className="blog-2 blogg">
                                        <div className="blog-detail">
                                            <p className="blog-date"><span>APARTMENT </span>/ March 20, 2019</p>
                                            <h3 className="blog-heading">light workout darkness that said.</h3>
                                            <p className="blog-date"><img src={Clock} alt="clock" width="21px" height="21px"/> Mar 12 <img src={Heart} alt="like" width="21px" height="21px"/> 0 like </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        
                        </div>

                    </div>

                   

                    <footer>
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="footer-logo"/>
                        </div>
                        <hr className="lines"/>
                        <div className="footer-container">
                            <div className="foot-a">
                                
                                <h3>About Us</h3>
                                <p className="abouts-footer">
                                    Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open
                                    <br/>
                                    <span className="icon">
                                        <img src={Facebook} alt="facebook" width="20px" height="19px"/>
                                    </span>
                                    <span className="icon">
                                    <img src={Twitter} alt="twitter" width="20px" height="20px"/>
                                    </span>
                                    <span className="icon">
                                    <img src={Geography} alt="geography" width="20px" height="20px"/>
                                    </span>
                                    <span className="icon">
                                    <img src={Behance} alt="behance" width="20px" height="22px"/>
                                    </span> 
                                </p>
                                
                                
                            </div>
                            <div className="foot-a">
                                <h3>Contact Info</h3>
                                <p className="contact-info">
                                    Address : Your address goes here, your demo address. Phone : +8880 44338899 Email : info@colorlib.com
                                </p>
                            </div>
                            <div className="foot-a">
                                <h3>Important Link</h3>
                                <p className="important-link">
                                    WHMCS-bridge Search Domain My Account Shopping Cart Our Shop
                                </p>
                            </div>
                            <div className="foot-a">
                                <h3>Newsletter</h3>
                                <p className="news-letter">
                                    Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open
                                    <br/>
                                    
                                </p>
                                <div className="paperplane">
                                    
                                    <input type="email" style={{textAlign:"center"}} name="email" placeholder="Email Address"/>
                            
                                    <button className="buttons"><img src={PaperPlane} alt="Paper Plane" width="20px" height="20px"/> </button>    
                            </div>
                            </div>
                        </div>
                        <hr className="lines"/>
                        <div className="copyright">
                            <p className="copyright-text">
                                Copyright © 2021 All rights reserved | This template is made with 🖤 by Colorlib
                            </p>
                        </div>
                    </footer>

        </div>
    )
}

export default index
