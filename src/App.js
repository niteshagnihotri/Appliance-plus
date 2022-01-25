import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {
      loading ?
        
        <div className="loader bg-slate-700" >
            <ScaleLoader color={'#27B0D2'} loading={loading} size={50} />
        </div>
          :
          <>
            <Header />
            <Routing />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
