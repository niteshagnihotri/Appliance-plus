import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';
import ClipLoader from "react-spinners/ClipLoader";
import ScrollToTop from "react-scroll-to-top";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {
      loading ?
        
        <div className="loader " >
            <ClipLoader color={'#27B0D2'} loading={loading} size={50} />
        </div>
          :
          <div>
            <Header />
            <Routing />
            <Footer />
          </div>
      }
      <ScrollToTop smooth viewBox="0 0 130 256"/>
    </div>
  );
}

export default App;
