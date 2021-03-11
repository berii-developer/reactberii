import React from 'react';
import about from '../src/image/about-3.jpg';
import win3 from '../src/image/win2.png';
import icon5 from '../src/image/icon3.png';
const About = () =>{
    return(
       <>
       <div className="container">
       <div className="row">
       
       <div className="col-lg-6">
       <h2 className="pt-5">About Us</h2>
       <p className="pb-5">For over 8 years we have been developing digital solutions for companies
        looking to gain better visibility on the internet.</p>
        <h3 className="pb-3"> <img src={win3} alt="" width="10%" /> Quality</h3>
        <p className="pl-5">Everything we do has the commitment of a well <br></br> trained and motivated team.</p>
        <h3 className="pb-3"> <img src={icon5} alt="" width="11%" /> Experience</h3>
        <p className="pl-5">Focused on results we seek to raise the level of <br></br> our customers.</p>
       </div>
       <div className="col-lg-6">
       <img src={about} alt="" width="100%" className="shadow"/>
       </div>
       </div>
       </div>
       </>
    );
}
export default About;