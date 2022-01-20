import { React, useState, useRef } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { ImLocation } from 'react-icons/im';
import { MdOutlineMail } from 'react-icons/md';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const navigate = useNavigate();
    const contactform = useRef();

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const SendData = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = user;
            const data = await fetch('https://appliance-plus.herokuapp.com/submit', {
                method: "POST",
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, message
                })
            });

            if (data.status === 200) {
                window.alert("Request submitted");

                emailjs.send("service_g6w6lyb","template_zm4262t", user , 'user_rmGsiRXH0q76p1YcmYG9g')
                .then((res) => {
                    console.log(res.text);
                    navigate('/');
                }, (error) => {
                    console.log(error.text);

                    setUser({name:"", email:"", phone:"", message:""});
                });

            }
            else if(data.status === 401){
                window.alert("Please Enter All The Fields");
            }
            else {
                window.alert("Request Submission Failed");
            }
    }

    return (
        <div className="contact w-100 py-0 h-auto font-Mont font-semibold">
            <div className="lg:w-10/12 mx-auto flex justify-center flex-col lg:flex-row ">
                <div className="w-100 lg:col-5 py-14 flex justify-end mr-5">
                    <Form ref={contactform} className="w-10/12 sm:w-8/12 mx-auto lg:w-8/12 xl:min-w-10/12 xl:max-w-5xl bg-slate-200 px-6 xl:px-12 bg-opacity-90 py-10 lg:py-16 space-y-7 font-Raleway">
                        <h2 className="font-bold">Request A Service</h2>
                        <p>We're here to help your appliance repair service soon going to much easier to get your appliance fixed.</p>
                        <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicText">
                            <Form.Control type="text" name="name" value={user.name}  onChange={handleInputs} placeholder="Full Name:" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" value={user.email} onChange={handleInputs} placeholder="Email:" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicNumber">
                            <Form.Control type="phone" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone:" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicText">
                            <Form.Control as="textarea" rows={3} value={user.message} col={3} name="message" onChange={handleInputs} placeholder="Message:" required/>
                        </Form.Group>
                        <Button className="btn btn-danger" type="submit" onClick={SendData}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col py-14 text-center bg-slate-800 lg:bg-transparent px-0 lg:px-12 bg-opacity-90 ">
                    <h1 className="font-QuickSand mt-2 mr-10 text-red-100 font-bold text-4xl">Send Us Message</h1>
                    <div className="max-w-fit mx-auto mt-20 text-center space-y-10">
                        <div className="flex flex-row  bg-slate-800 bg-opacity-50 p-3 text-gray-200 hover:bg-opacity-80">
                            <div className="flex mr-2 sm:mx-4">
                                <ImLocation className="text-2xl sm:text-3xl text-slate-300" />
                            </div>
                            <div className="text-left lg:pr-5">
                                <h3 className="font-SourceSans tracking-wide font-bold"> Address:</h3>
                                <h4 className="font-Raleway font-bold">Mp Nagar, Bhopal M.P</h4>
                            </div>
                        </div>
                        <div className="flex flex-row  bg-slate-800 bg-opacity-50 p-3 text-gray-200 hover:bg-opacity-80">
                            <div className="flex mr-2 sm:mx-4">
                                <MdOutlineMail className="text-2xl sm:text-3xl text-slate-300" />
                            </div>
                            <div className="flex flex-col text-left lg:pr-5  overflow-auto">
                                <h3 className="font-SourceSans font-bold"> Email:</h3>
                                <h4 className="font-Mont text-xl flex-wrap font-bold cursor-pointer underline underline-offset-4" onClick={() => { window.location = 'mailto:applianceplus2022@gmail.com' }}>applianceplus2022@gmail.com</h4>
                            </div>
                        </div>
                        <div className="flex flex-row  bg-slate-800 bg-opacity-50 p-3 text-gray-200 hover:bg-opacity-80">
                            <div className="flex mr-2 sm:mx-4">
                                <BsFillTelephoneForwardFill className="text-xl sm:text-3xl text-slate-300" />
                            </div>
                            <div className="text-left lg:pr-5">
                                <h3 className="font-SourceSans font-bold"> Contact:</h3>
                                <h4 className="font-bold font-SourceSans cursor-pointer underline underline-offset-4" onClick={() => window.location = 'tel:+918871653988'}>+918871653988</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;