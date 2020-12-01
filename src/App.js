import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";

//sections
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Routes from './router/AppRouter';

import './assets/css/reset.css';
import './assets/css/App.css';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        const root = document.querySelector("#root");
        const el = document.querySelector(".loading");
        if (root && el) {
            root.classList.remove("small")
            el.classList.add("stopped");
        }

      }, 800);
  });

  return (
      <Router>

        <div className="loading"></div>

        <Header/>
      
        <Routes/>

        <Footer/>
  
      </Router>
  );
}

export default App;
