import React from "react";
import {RiNumber1} from 'react-icons/ri';
import {RiNumber2} from 'react-icons/ri';
import {RiNumber3} from 'react-icons/ri';
import { motion } from "framer-motion";


const Solution = () =>{
    return (
        

        <div className="w-100 py-10 h-auto md:h-[80vh] bg-pink-50 md:py-16">
            <div className="py-4 h-auto lg:w-10/12 mx-auto ">
                <div className="text-center space-y-5 xl:space-y-10 font-bold  px-2">
                    <motion.h3 initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  className="text-4xl leading-tight md:text-5xl font-bold font-Raleway">
                        Solution in <span className="text-red-800">Three</span> Easy Steps
                    </motion.h3>
                    <h5 className="font-QuickSand font-semibold text-slate-500">Just 3 Steps and Your Appliance is Repaired</h5>
                </div>
                <div className="w-auto md:w-100 flex md:flex-row md:justify-center mt-12 md:mt-20 md:space-x-9 md:space-y-0 xl:space-x-14 font-QuickSand flex-col space-x-0 space-y-8 ">
                    <motion.div initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  className="shadow-xl shadow-red-200 text-center space-y-4 border-0 p-4 sm:p-10 bg-red-200 max-w-fit w-fit block sm:mx-6 mx-3 hover:shadow-2xl hover:shadow-red-400">
                        <RiNumber1 className="text-4xl mx-auto rounded-full bg-red-500 p-2 hover:bg-yellow-500"/>
                        <h3 className="font-bold">Call Up</h3>
                        <h6>You can get service related information by calling on the given number.</h6>
                    </motion.div>
                    <motion.div  initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="shadow-xl shadow-yellow-200 text-center space-y-4 border-0 p-4 sm:p-10 bg-yellow-200 w-auto block sm:mx-6 mx-3 hover:shadow-2xl hover:shadow-yellow-400">
                        <RiNumber2 className="text-4xl mx-auto rounded-full bg-yellow-500 p-2 hover:bg-green-500"/>
                        <h3 className="font-bold">Form Fill up</h3>
                        <h6>You can get other information related to service and services by filling the form</h6>
                        
                    </motion.div>
                    <motion.div initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="shadow-xl shadow-green-200 text-center space-y-4 border-0 p-4 sm:p-10 bg-green-200 w-auto block sm:mx-6 mx-3 hover:shadow-2xl hover:shadow-green-400">
                        <RiNumber3 className="text-4xl mx-auto rounded-full bg-green-500 p-2 hover:bg-yellow-500"/>
                        <h3 className="font-bold">Repair & Solve</h3>
                        <h6>If you take service from us then customer satisfaction is our first priority.</h6>
                        
                    </motion.div>

                </div>
            </div>
        </div>
    ) 
}

export default Solution;