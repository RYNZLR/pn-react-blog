import React from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";

//sections
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Routes from './router/AppRouter';

function App() {
  return (
      <Router>
        <Header/>
      
        <Routes/>

        <Footer/>
  
      </Router>
  );
}

export default App;
