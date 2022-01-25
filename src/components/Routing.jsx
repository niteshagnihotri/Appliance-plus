import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const AboutPage = lazy(() => import('./AboutPage'));
const ServicesPage = lazy(() => import('./ServicesPage'));
const ContactPage = lazy(() => import('./ContactPage'));

const Routing = () => {
  return (
    <>
      <Suspense fallback={<div className="loader text-center my-5">Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Routing;