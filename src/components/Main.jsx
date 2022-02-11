import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import 'animate.css';

const Main = () => {

    return (
        <div className="w-100 z-100 bg-fixed bg-slate-200 main animate__animated animate__fadeInDown">
            <div className="lg:w-10/12 h-[98vh] sm:h-[90vh] mx-auto flex items-center justify-center ">
                <div className=" -mt-28 bg-slate-300 bg-opacity-50 font-Mont text-center space-y-8 py-10 402:px-4 mx-3 sm:px-16 sm:py-5 shadow-2xl shadow-slate-400">
                    <h1 className="text-5xl leading-snug font-bold font-QuickSand text-slate-800 animate__animated animate__fadeInUp">Best Home Appliances</h1>
                    <h3 className="font-QuickSand text-4xl leading-snug font-bold animate__animated animate__fadeInUp"><span className="text-red-800" >Repair Solution</span> in Bhopal</h3>
                    <Button className="animate__animated animate__fadeInUp" onClick={()=>window.location = 'tel:+918871653988'} variant="danger">Call Now </Button>
                </div>
            </div>
        </div>
    )
}

export default Main;