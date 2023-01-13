import React from 'react';
import navpic from '../../images/a.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
      <>
  <footer className="footer p-10 bg-neutral text-neutral-content lg:justify-between">
  <div>
  <img src={navpic} height={400} width={150} alt="" />
    <p>Online Tutor BD<br/>since 2023</p>
  </div> 
  <div>
    <span className="footer-title text-lg text-white">Social</span> 
    <div className="grid grid-flow-col gap-4 text-3xl">
      <a><FaFacebook /></a> 
      <a><FaInstagramSquare/></a> 
      
    </div>
        </div>
        
      </footer>
      <footer className="footer footer-center p-4 bg-[#e6c229]  text-black text-lg font-semibold ">
        <div>
          <p>Copyright © 2023 - Online Tutor BD</p>
        </div>
      </footer>
    </>
    );
};

export default Footer;