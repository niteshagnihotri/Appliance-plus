import React from "react";
import '../App.css';

const Quote = () => {
    return (

        <div className="Qoute w-100 h-auto bg-slate-600 bg-fixed">
            <div className="py-4 h-auto lg:w-10/12 mx-auto">
                <div className="w-10/12 mx-auto bg-gray-100 bg-opacity-50 text-center flex flex-col items-center space-y-10 py-16 my-28 font-Raleway">
                    <h1 >
                        Progressive. Professional. Personal.
                    </h1>
                    <h4>Entrust us with your Appliance repair and you will not be dissapointed !</h4>
                    <button onClick={() => window.location = 'tel:+918871653988'} className="btn btn-danger shadow-md shadow-red-800">Call2Action</button>
                </div>
            </div>
        </div>
    );
}

export default Quote;