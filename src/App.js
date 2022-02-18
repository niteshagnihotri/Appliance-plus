import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/Routing';
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <div>
      <div>
        <Routing />
      </div>
      <ScrollToTop smooth viewBox="0 0 130 256" />
    </div>
  );
}

export default App;
