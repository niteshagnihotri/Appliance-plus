import React from "react";
import img1 from '../images/about.png';
import img2 from '../images/group.png';
import img3 from '../images/goal.png';
import { motion } from "framer-motion";

function About() {
    return (
        <div className="w-100 my-10 " id="about">
            <div className="lg:w-10/12 mx-auto">
                <div className="flex flex-col lg1:flex-row">
                    <motion.div className="lg1:w-11/12 items-start lg:mr-5" 
                    initial={{x: -500}} whileInView={ {x: 0} } >
                        <img src={img1} className="h-100" alt="Applianceplus - Home Electronic Repair Service in Bhopal" />
                    </motion.div>
                    <motion.div className="w-fit sm:mx-10 px-3" initial={{opacity: 0}} whileInView={ {opacity: 1} } transition={{ delay: 0.5 }} >
                        <div className="mt-20 font-QuickSand lg1:text-left">
                            <h3 className="text-uppercase font-bold text-lime-500 text-xl tracking-widest">Welcome to Applianceplus</h3>
                            <h3 className="py-3 text-4xl sm:text-5xl leading-tight font-semibold">Appliance<span className="text-red-500">plus</span><span className="text-xl sm:text-3xl font-SourceSans font-medium"> - We're Here To Help Your Repair Service</span></h3>
                            <div className='w-1/5 my-2 py-1 border-b-4 border-b-green-300' />
                        </div>
                        <div className="flex flex-row space-x-3 py-4 border-b-2">
                            <div>
                                <img src={img3} className="w-10" alt="" />
                            </div>
                            <div className="col sm:col-8">
                                <h1 className="text-2xl leading-8 font-semibold">Our Mission</h1>
                                <p className="text-justify "> Our vision of the company grew from personal concerns about customer service depleting over the years, which he witnessed first-hand in companies he worked for</p>
                            </div>

                        </div>
                        <div className="flex flex-row space-x-3 py-4">
                            <div>
                                <img src={img2} className="w-10" alt="" />
                            </div>
                            <div className="col sm:col-8">
                                <h1 className="text-2xl leading-8 font-semibold">Professional Team</h1>
                                <p className="text-justify">We are providing the best and expert team. Our team is professionally qualified and certified expert. They offer you best and guaranteed repairing services at best prices.</p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;