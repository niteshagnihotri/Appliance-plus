import React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Main = () => {

    const br = useState(window.innerWidth <= 550 ? <br /> : null);
    const variants = {
        hidden: { opacity: 0},
        visible: { opacity: 1 },
    }

    return (
        <div>
            <div className="w-100 z-100 bg-fixed bg-slate-200 main" >
                <div className="lg:w-10/12 h-[98vh] sm:h-[90vh] mx-auto flex items-center justify-center ">
                    <motion.div initial="hidden" animate="visible" variants={variants} className=" -mt-28 bg-slate-300 bg-opacity-60 font-Mont text-center space-y-8 py-10 pl-4 402:px-4 mx-3 sm:px-16 sm:py-5 drop-shadow-2xl shadow-slate-800">
                        <h1 className="text-5xl leading-snug font-bold font-QuickSand text-slate-800 ">Best Home Appliances</h1>
                        <h3 className="font-QuickSand text-4xl leading-snug font-bold"><span className="text-red-800" >Repair Solution</span>{br} in Indore & Bhopal</h3>
                        <Button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => window.location = 'tel:+918871653988'} variant="danger">Call Now </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Main;