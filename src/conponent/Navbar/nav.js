import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/a.jpg';
import Button from '../Button/button';
import { FaBars} from "react-icons/fa";

const Nav = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "CONTACT", link: "/contact" },
    ];
    const[open,setOpen]=useState(false);
    return (
      <div className='shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-[#E6C229] py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center
          text-gray-800'>
            <Link className="flex-1" to="/">
                    <img src={logo} height={400} width={150} alt="" />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl text-slate-50 absolute right-8 top-6 cursor-pointer md:hidden'>
            <span name={open ? 'close':'menu'}><FaBars /></span>
          </div>
          <ul className={`md:flex md:items-center md:text-slate-50 md:pb-0 pb-12 absolute md:static bg-[#E6C229] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
                    {link.name}
                  </a>
                </li>
              ))
            }
            <Link to='/login'>
                <Button>Login</Button>
            </Link>
            <Link to='/signup'>
                <Button>SignUp</Button>
            </Link>
          </ul>
        </div>
      </div>
    );
};

export default Nav;