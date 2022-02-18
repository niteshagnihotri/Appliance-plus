import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const Home = lazy(() => import('./Home'));
const AboutPage = lazy(() => import('./AboutPage'));
const ServicesPage = lazy(() => import('./ServicesPage'));
const ContactPage = lazy(() => import('./ContactPage'));

const Routing = () => {
  return (
    <>
      <Suspense fallback={<div className="loader text-center"><ClipLoader color={'#27B0D2'} size={50}/></div>}>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      <Footer/>
      </Suspense>
    </>
  )
}

export default Routing;