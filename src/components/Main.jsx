import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Main = () => {

    return (
        <div className="w-100 bg-slate-200 main animate__animated animate__fadeInUp animate animate__fadeInUp">
            <div className="lg:w-10/12 h-[90vh] mx-auto flex items-center justify-center ">
                <div className="maindiv text-center text-gray-800 font-Raleway space-y-10 -mt-20 bg-slate-200 bg-opacity-50 m-3 py-4 px-5 sm:p-10 md:p-10 md:px-20 shadow-2xl">
                    <h1 className="text-4xl sm:text-5xl font-SourceSans tracking-wider font-bold lg1:text-6xl my-8 ">Best Home Appliances </h1>
                    <h3 className="font-bold">
                        <span className="text-red-800 leading-tight text-3xl">Repair Service</span> in Bhopal, M.P
                    </h3>
                    <Link onClick={()=>window.location="tel:+918871653988"} className="btn btn-danger mb-10 shadow-2xl" to="">Get Service</Link>
                </div>
            </div>
        </div>
    )
}

export default Main;