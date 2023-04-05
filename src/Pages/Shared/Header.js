import React from 'react';
import logo from '../../Image/logos/logo.png'
import { NavLink } from "react-router-dom";
import Home from '../Home.js/Home';

const Header = () => {


    return (
        <div style={{ backgroundColor: '#FBD062' }} className="navbar ">
            <div className="navbar-start">
                <img className=" normal-case w-24" src={logo} alt="" />
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="flex text-black">

                    <li className='p-4'><NavLink element={<Home></Home>}>Home</NavLink></li>
                    <li className='p-4'><NavLink >Our Portfolio</NavLink></li>
                    <li className='p-4'><NavLink>Our Team</NavLink></li>
                    <li className='p-4'><NavLink>Contract</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;