import React, {useRef} from "react";
import { useNavigate } from "react-router";
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import img from '../images/logowhite1.png';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm("service_g6w6lyb","template_qkmgsyx", form.current, 'user_rmGsiRXH0q76p1YcmYG9g')
        .then((res) => {
            console.log(res.text);
            window.alert("Newsletter Subscribed");
            navigate('/');
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="w-100 h-auto bg-gray-800 pt-24 text-white font-SourceSans">
            <div className="lg:w-10/12 mx-auto xl:px-32 lg:px-0 lg1:px-3">
                <div className="mx-3 sm:mx-5 md:flex md:flex-row md:justify-between space-y-16 md:space-y-0">
                    <div className="flex flex-col w-fit h-auto sm:w-80 leading-loose">
                        <img src={img} alt="applianceplus" className=" w-56 p-0 m-0 lg1:ml-5" />
                        <p className="mt-4">
                        Applianceplus was established in 2017, The owner is a master in the plumbing industry (All Home Electronics) having more than 10 years of experience in residential, commercial and industrial services. Our vision of the company grew from personal concerns about customer service depleting over the years, which he witnessed first-hand in companies he worked for.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-10 lg1:px-5 ">
                        <h3 className="font-bold font-Mont mt-3">Quick link</h3>
                        <ul className="space-y-6 list-disc" >
                            <li><Link className="no-underline text-xl text-slate-200" to="/">Home</Link></li>
                            <li><Link className="no-underline text-xl text-slate-200" to="/about">About</Link></li>
                            <li><Link className="no-underline text-xl text-slate-200" to="/services">Services</Link></li>
                            <li><Link className="no-underline text-xl text-slate-200" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-10 ">
                        <h3 className="font-bold font-Mont mt-3">Newsletter</h3>
                        <p className="text-xl">Subscribe our newsletter to get more updates </p>

                        <Form ref={form} onSubmit={sendEmail} className="space-x-5">
                            <Form.Group className="w-10/12 max-w-sm" controlId="formBasicEmail">
                                <Form.Control type="email" name="emailnl" placeholder="Email Address:" />
                            </Form.Group>
                            <Button className="btn btn-danger m-0 mt-4" type="submit" onClick={sendEmail}>
                                Submit
                            </Button>
                        </Form>
                        <div>
                            <span className="text-2xl">Available 24 X 7 -  <Link to="" style={{ textDecoration: "underline gray", color: "white" }} className='hover:text-slate-400 underline-offset-4' onClick={() => window.location = 'tel:+918871653988'}>+918871653988</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 mt-5 py-2 pl-2  text-left sm:p-10 text-gray-400 leading-8 sm:leading-loose">
            Copyright © Applianceplus 2022. All right reserved. Designed & Developed by <Link to="//niteshagnihotri.github.io/" className="underline-offset-4">Nitesh Agnihotri</Link>
            </div>
        </div>

    )
}

export default Footer;