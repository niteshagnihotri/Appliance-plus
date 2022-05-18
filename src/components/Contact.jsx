import { React} from "react";
import { ImLocation } from 'react-icons/im';
import { MdOutlineMail } from 'react-icons/md';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import Cform from "./Cform";


const Contact = () => {
    return (
        <div className="contact w-100 py-0 h-auto font-Mont font-semibold">
            <div className="lg:w-10/12 mx-auto flex justify-center flex-col lg:flex-row ">
                <motion.div initial={{x: -100, opacity:0}} viewport={{ once: true }} whileInView={ {x: 0, opacity:1} }  className="w-100 lg:col-5 py-14 flex justify-end mr-5">
                   <Cform/>
                </motion.div>
                <div className="col py-14 text-center bg-slate-800 lg:bg-transparent px-0 lg:px-12 bg-opacity-90 ">
                    <motion.h1 initial={{y: 50, opacity:0}} viewport={{ once: true }} whileInView={ {y: 0, opacity:1} } className="font-QuickSand mt-2 mr-10 text-red-100 font-bold text-4xl">Send Us Message</motion.h1>
                    <div className="max-w-fit mx-auto mt-20 text-center space-y-10">
                        <motion.div initial={{y: 50, opacity:0}} viewport={{ once: true }} whileInView={ {y: 0, opacity:1} } className="flex flex-row  bg-slate-800 bg-opacity-50 p-3 text-gray-200 hover:bg-opacity-80">
                            <div className="flex mr-2 sm:mx-4">
                                <ImLocation className="text-2xl sm:text-3xl text-slate-300" />
                            </div>
                            <div className="text-left lg:pr-5">
                                <h3 className="font-SourceSans tracking-wide font-bold"> Address:</h3>
                                <h4 className="font-Raleway font-bold">M.P Nagar, Bhopal M.P</h4>
                                <h4 className="font-Raleway font-bold">Vijay Nagar, Indore M.P</h4>
                            </div>
                        </motion.div>
                        <motion.div initial={{y: 50, opacity:0}} viewport={{ once: true }} whileInView={ {y: 0, opacity:1} } className="flex flex-row  bg-slate-800 bg-opacity-50 p-3 text-gray-200 hover:bg-opacity-80">
                            <div className="flex mr-2 sm:mx-4">
                                <MdOutlineMail className="text-2xl sm:text-3xl text-slate-300" />
                            </div>
                            <div className="flex flex-col text-left lg:pr-5  overflow-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 ">
                                <h3 className="font-SourceSans font-bold"> Email:</h3>
                                <h4 className="font-Mont text-xl flex-wrap font-bold cursor-pointer underline underline-offset-4" onClick={() => { window.location = 'mailto:applianceplus2022@gmail.com' }}>applianceplus2022@gmail.com</h4>
                            </div>
                        </motion.div>
                        <motion.div initial={{y: 50, opacity:0}} viewport={{ once: true }} whileInView={ {y: 0, opacity:1} } className="flex flex-row  bg-slate-800 bg-opacity-50 p-3 text-gray-200 hover:bg-opacity-80">
                            <div className="flex mr-2 sm:mx-4">
                                <BsFillTelephoneForwardFill className="text-xl sm:text-3xl text-slate-300" />
                            </div>
                            <div className="text-left lg:pr-5">
                                <h3 className="font-SourceSans font-bold"> Contact:</h3>
                                <h4 className="font-bold font-SourceSans cursor-pointer underline underline-offset-4" onClick={() => window.location = 'tel:+917224930506'}>+917224930506</h4>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;