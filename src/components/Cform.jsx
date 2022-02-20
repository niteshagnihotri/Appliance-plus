import { React, useState, useRef } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';

const Cform = () => {
    const navigate = useNavigate();
    const contactform = useRef();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const SendData = async (e) => {
        e.preventDefault();
        emailjs.send("service_g6w6lyb", "template_zm4262t", user, 'user_rmGsiRXH0q76p1YcmYG9g');
        const { name, email, phone, message } = user;

        await fetch('/submit', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        }).then((res) => {
            window.alert("Request submitted");
            setUser({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
            navigate('/Home');
            console.log(res.text);
        }).catch((error) => {
            window.alert("Request Submission Failed. Please Use Call Service");
            setUser({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
            console.log('Request failed', error);
        });
    }

    return (
        <div>
            <Form ref={contactform} className="w-10/12 sm:w-8/12 mx-auto lg:w-8/12 xl:min-w-10/12 xl:max-w-5xl bg-slate-200 px-6 xl:px-12 bg-opacity-90 py-10 lg:py-16 space-y-7 font-Raleway">
                <h2 className="font-bold">Request A Service</h2>
                <p>We're here to help your appliance repair service soon going to much easier to get your appliance fixed.</p>
                <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicText">
                    <Form.Control type="text" name="name" value={user.name} onChange={handleInputs} placeholder="Full Name:" required />
                </Form.Group>
                <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" value={user.email} onChange={handleInputs} placeholder="Email:" required />
                </Form.Group>
                <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicNumber">
                    <Form.Control type="phone" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone:" required />
                </Form.Group>
                <Form.Group className="mb-3 w-auto max-w-sm" controlId="formBasicText">
                    <Form.Control as="textarea" rows={3} value={user.message} col={3} name="message" onChange={handleInputs} placeholder="Message:" required />
                </Form.Group>
                <Button className="btn btn-danger" type="submit" onClick={SendData}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Cform;