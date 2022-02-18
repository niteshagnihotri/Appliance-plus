import React from "react";
import img from '../images/testwb.png';
import {MdQuickreply} from 'react-icons/md';
import {HiFastForward} from 'react-icons/hi';
import {GiAutoRepair} from 'react-icons/gi';
import { motion } from "framer-motion";

function Work() {
    return (

        <div className="w-100 h-auto flex items-center bg-slate-800 text-white lg1:py-14 py-5">
            <div className="lg:w-10/12 mx-auto">
                <div className="flex flex-col-reverse lg1:flex-row">
                    <motion.div initial={{x: -100, opacity:0}} whileInView={ {x: 0, opacity:1} } className="sm:mx-10 px-3">
                        <div className="mt-10 font-QuickSand text-left mb-5 border-b">
                            <h5 className="text-uppercase ">What We Do </h5>
                            <h3 className="py-3 text-4xl sm:text-5xl leading-tight font-Raleway">Why Choose Us </h3>
                        </div>
                        <div className="flex flex-row space-x-3 py-2">
                            <div>
                                <GiAutoRepair className="text-xl text-red-400 mt-2 cursor-pointer"/>
                            </div>
                            <div>
                                <h1 className="text-2xl leading-8 text-green-300 font-semibold font-Mont cursor-pointer hover:opacity-70">Repair Service</h1>
                                <p className=" text-slate-300">If you Want to repair or replace your Home Electronics, call us now and talk to one of our Certified specialists. They will answer all your questions </p>
                            </div>
                        </div>
                        
                        <div className="flex flex-row space-x-3 py-2">
                            <div>
                                <MdQuickreply className="text-xl text-red-400 mt-2 cursor-pointer"/>
                            </div>
                            <div>
                                <h1 className="text-2xl leading-8 text-green-300 font-semibold font-Mont cursor-pointer hover:opacity-70">Quick Response</h1>
                                <p className=" text-slate-300">Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service response time is one hour</p>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-3 py-2">
                            <div>
                                <HiFastForward className="text-xl text-red-400 mt-2 cursor-pointer"/>
                            </div>
                            <div className="col">
                                <h1 className="text-2xl leading-8 font-semibold text-green-300 font-Mont cursor-pointer hover:opacity-70">Fair Prices</h1>
                                <p className=" text-slate-300">We are offering very genuine and fair prices. Customer satisfaction is our main concern. We repair all brands & Models and available 24/7 for your Service</p>
                            </div>
                        </div>
                    </motion.div>
 
                    <motion.div initial={{x: 100,  opacity:0}} whileInView={ {x: 0,  opacity:1} } className="flex w-100 items-start mr-5 ">
                        <img src={img} className="h-100 w-auto" alt="Quick repair service in bhopal" />
                    </motion.div>
                </div>
            </div>
        </div>

    )
};

export default Work;