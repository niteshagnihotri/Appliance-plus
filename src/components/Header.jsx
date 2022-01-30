import React, { useState } from 'react';
import img1 from '../images/logowhite1.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import {GrClose} from 'react-icons/gr';
import '../App.css';

const Header = () => {
    const [showNav, setshowNav] = useState(false);
    return (
        <>
            <div className="sticky top-0 z-50 ">
                <div className="header md:bg-zinc-800">
                    <div className="hidden md:w-10/12 md:mx-auto md:flex md:justify-between md:items-center text-white">
                        <div className="py-3 pl-5 ">
                            <i class="fa fa-phone px-2 text-yellow-400" style={{ "font-size": "16px" }}></i>
                            <span></span>
                            <Link to="" style={{ textDecoration: "none", color: "white" }} className='hover:text-slate-400' onClick={() => window.location = 'tel:+918871653988'}>+918871653988</Link>
                        </div>
                        <div className="py-2 pr-5 text-right font-QuickSand">
                            <i class="fa fa-envelope px-2 text-yellow-500" style={{ "font-size": "14px" }}></i>
                            <Link to="" style={{ textDecoration: "none", color: "white" }} className='hover:underline hover:underline-offset-8' onClick={() => window.location = 'mailto:appliancesplus2022@gmail.com'}>appliancesplus2022@gmail.com</Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-100">
                    <div className="bg-white md:w-10/12 mx-auto md:flex items-center justify-between font-QuickSand">
                        <div className="flex items-center justify-between">
                           <Link to="/"><img className="w-56 p-0 m-0 lg1:ml-5" src={img1} alt="logo" /></Link> 
                            {
                                showNav ? 
                                <GrClose onClick={() => { setshowNav(!showNav) }} className='md:hidden block w-10 h-auto p-2 mr-3 cursor-pointer transition-transform' />
                                        :
                                <HiOutlineMenuAlt3 onClick={() => { setshowNav(!showNav) }} className='md:hidden block w-10 h-auto p-2 mr-3 cursor-pointer' />
                            }
                        </div>
                        <ul className={(showNav ? "left-0" : "-left-full") + " fixed md:static md:flex flex md:flex-row flex-col      xl:space-x-12 lg:space-x-6 md:space-y-0 md:space-x-5 space-y-10    md:w-auto w-10/12 md:my-auto  md:bg-transparent bg-gray-300 bg-opacity-90    py-4 pl-4 sm:pl-10 lg1:mr-3   bottom-0 top-16    md:text-lg text-xl font-bold   transition-left z-10"}>
                            <Link onClick={()=>setshowNav(false)} className="no-underline text-gray-700 md:p-1 font-semibold md:hover:bg-orange-300 hover:text-gray-600 " to="/">Home</Link>
                            <Link onClick={()=>setshowNav(false)} className="no-underline text-gray-700 md:p-1 font-semibold md:hover:bg-orange-300 hover:text-gray-600" to="/about">About Us</Link>
                            <Link onClick={()=>setshowNav(false)} className="no-underline text-gray-700 md:p-1 font-semibold md:hover:bg-orange-300 hover:text-gray-600" to="/services">Services</Link>
                            <Link onClick={()=>setshowNav(false)} className="no-underline text-gray-700 md:p-1 font-semibold md:hover:bg-orange-300 hover:text-gray-600" to="/contact">Contact</Link>
                            <div className='md:hidden bottom-10 absolute font-semibold space-y-5 -translate-x-3'>
                                <div>
                                    <i class="fa fa-phone px-2 text-black" style={{ "font-size": "16px" }}></i>
                                    <span onClick={() => window.location = 'tel:+918871653988'}>+918871653988</span>
                                </div>
                                <div>
                                    <i class="fa fa-envelope px-2 text-black" style={{ "font-size": "14px" }}></i>
                                    <span className='text-base 402:text-lg ' onClick={() => window.location = 'mailto:appliancesplus2022@gmail.com'}>appliancesplus2022@gmail.com</span>
                                </div>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;