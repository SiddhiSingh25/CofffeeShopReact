import React from 'react';
import { GiCoffeePot } from "react-icons/gi";
import { NavLink } from "react-router-dom"
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="w-full   text-white h-40  px-28">
            <div className='h-[100%] w-full px-28 bg-[#333D4B] rounded flex items-center justify-between'>
            <div className="flex items-center">
                <GiCoffeePot className="text-3xl"/>
            </div>
            <div className="flex items-center">
                <nav className="flex space-x-8">
                    <NavLink className="text-[2vh] text-[#FFFFFF] hover:text-gray-300" to="Home">HOME</NavLink>
                    <NavLink className="text-[2vh] text-[#FFFFFF] hover:text-gray-300" to="About">ABOUT</NavLink>
                    <NavLink className="text-[2vh] text-[#FFFFFF] hover:text-gray-300" to="BuyCoffeePage">BUY COFFEE</NavLink>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                <FaSquareFacebook className="text-xl" />
                </a>
                <a href="#" className="hover:text-gray-300">
                <AiFillInstagram className="text-xl"/>
                </a>
                <a href="#" className="hover:text-gray-300">
                <FaLinkedin className="text-xl" />
                </a>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
