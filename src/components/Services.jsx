import React from "react";
import ac from '../images/ac.png';
import fg from '../images/fridge (2).png';
import wm from '../images/washing-machine (2).png';
import oven from '../images/microoven.png';
import '../App.css';

const Services = () => {
    return (

        <div className="w-100 bg-red-100">
            <div className="py-4 h-auto lg:w-10/12 mx-auto">
                <div className="md:w-50 mx-auto text-center">
                    <h2 className="pt-5 text-3xl font-QuickSand font-bold"><span className="text-red-800 font-extrabold text-4xl">Services</span> We Offer</h2>
                    <hr className="w-3/4 sm:w-1/4 mx-auto bg-black" />
                    <p className="mx-3 font-Mont font-semibold">Applianceplus is one of the top home appliance repair service company with years of experience and expertise. We can handle any type of appliance irrespective of its criticality. Whether it Is a geyser or a washing machine, we can handle it all</p>
                </div>
                <h3 className="pt-10 text-center text-4xl font-Mont font-bold text-gray-600">We Repair - </h3>

                <div className="flex flex-col my-5 space-x-5 space-y-10 lg1:space-y-0 lg1:flex-row lg1:px-10">

                    <div className="w-10/12 bg-slate-600 mx-auto shadow shadow-violet-400 sm:flex sm:flex-row ">
                        <div className="w-auto sm:w-auto bg-slate-200 sm:flex sm:items-center sm:justify-center" >
                            <img src={ac} alt="Ac repair service in bhopal" className="w-56 sm:w-auto mx-auto sm:self-center my-auto hover:scale-110" />
                        </div>
                        <div className="flex flex-col items-center justify-center px-3 my-auto text-white ">
                            <h3 className="font-semibold my-3">
                                <span className="text-red-400">Air</span> Conditioner
                            </h3><hr className="w-48 my-0 mb-4" />
                            <p className="text-sm font-Mont text-justify flex items-center">
                            We are known for our efficient and reliable AC repair and maintenance services. Our costs are economical, and services are second to none. We are a team of fully certified, experienced, skilled and focused professionals who can handle even the most critical tasks
                            </p>
                        </div>
                    </div>

                    <div className="w-10/12 mx-auto sm:flex sm:flex-row bg-slate-200 shadow shadow-violet-400 font-semibold">
                        <div className="flex flex-col items-center justify-center px-3 my-auto">
                            <h3 className="font-semibold my-3"><span className="text-red-400">Micro</span>Wave
                            </h3><hr className="w-60 my-0 mb-4" />
                            <p className="text-sm font-Mont text-justify flex items-center">
                            If you face any problem related to your microwave or it is not working at all or it is unable to heat food, then you can call us. These units are ideal for homes of all sizes. We can handle any issue irrespective of its criticality and replace any damaged part.
                            </p>
                        </div>
                        <div className="w-auto sm:w-auto sm:flex sm:items-center sm:justify-center bg-slate-600">
                            <img src={oven} alt="microwave oven repair service in bhopal" className="w-44 mx-auto sm:px-2 sm:w-auto sm:self-center my-auto hover:scale-110" />
                        </div>
                    </div>

                </div>


                <div className="flex flex-col my-5 space-x-5 space-y-10 lg1:space-y-0 lg1:flex-row lg1:px-10">

                    <div className="w-10/12 bg-slate-600 mx-auto shadow shadow-violet-400 sm:flex sm:flex-row">
                        <div className="w-auto sm:w-auto bg-slate-200 sm:flex sm:items-center sm:justify-center" >
                            <img src={fg} alt="Refrigerator repair service in bhopal" className="w-56 sm:w-auto mx-auto sm:self-center my-auto hover:scale-110" />
                        </div>
                        <div className="flex flex-col items-center justify-center px-3 my-auto text-white ">
                            <h3 className="font-semibold my-3">
                                <span className="text-red-400">Ref</span>rigerator
                            </h3><hr className="w-48 my-0 mb-4" />
                            <p className="text-sm font-Mont text-justify flex items-center">
                                Our engineers are highly experienced and certified to handle different refrigerators of different brands. Whether you have an LG Refrigerator , Samsung refrigerator. we can handle them and give you complete peace of mind. 
                            </p>
                        </div>
                    </div>

                    <div className="w-10/12 mx-auto sm:flex sm:flex-row bg-slate-200 shadow shadow-violet-400 font-semibold">
                        <div className="flex flex-col items-center justify-center px-3 my-auto">
                            <h3 className="font-semibold my-3"><span className="text-red-400">Wash</span>ing Machine
                            </h3><hr className="w-60 my-0 mb-4" />
                            <p className="text-sm font-Mont text-justify flex items-center">
                            We can repair any washing machine of any brand and can troubleshoot a wide range of technical issues. We can handle starting problem, dryer problem, spin problem to any other technology-related issues. 
                            </p>
                        </div>
                        <div className="w-auto sm:w-auto sm:flex sm:items-center sm:justify-center bg-slate-600">
                            <img src={wm} alt="washing machine repair service in bhopal" className="mx-auto w-44 sm:w-96 sm:self-center my-auto hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;