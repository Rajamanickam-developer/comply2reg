import React from 'react'
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <nav className="container-fluid flex py-4 px-6 lg:px-12 xl:px-16 md:py-8 justify-between items-center">
            <a className="flex items-center gap-1 md:gap-2 lg:gap-3">
                <img src={require('../assets/Logo.png')} width={"32px"} height={"32px"} alt="logo" />
                <h2 className="md:text-xl lg:text-2xl font-semibold text-[#171717]">Comply2reg</h2>
            </a>
            <ul className="text-sm lg:text-md xl:text-lg font-medium hidden md:flex justify-between gap-4 lg:gap-6">
                <li href="">
                    About us
                </li>
                <li href="">
                    Blog
                </li>
                <li href="">
                    Features
                </li>
                <li href="">
                    Industries
                </li>
            </ul>
            <div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                        <span className="flex items-center mt-[2px] w-[16px] h-[16px] md:w-[20px] md:w-[20px]"><img src={require('../assets/material-symbols_call-sharp.png')} width={"20px"} height={"20px"} alt="logo" /></span>
                        <span className="text-sm hidden lg:block font-medium">+91-9338453745</span>
                    </div>
                    <button className="px-3 py-1.5 md:px-5 md:py-2.5 text-xs bg-[#2563EB] text-[#FFFFFF] rounded-md md:rounded-lg md:gap-1.5 lg:gap-2">
                        Book a demo
                    </button>
                    <div className="flex items-center md:hidden">
                        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            { isOpen ? <FaTimes /> : <FaBars /> }  
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {isOpen && (
            <div className="flex flex-col z-20 items-center font-bold py-2 text-center text-sm bg-gray-50 md:hidden">
                <a href="" className="w-full py-2 hover:bg-gray-200">
                    About us
                </a>
                <a href="" className="w-full py-2 hover:bg-gray-200">
                    Blog
                </a>
                <a href="" className="w-full py-2 hover:bg-gray-200">
                    Features
                </a>
                <a href="" className="w-full py-2 hover:bg-gray-200">
                    Industries
                </a>
            </div>
        )}
    </>
)}
