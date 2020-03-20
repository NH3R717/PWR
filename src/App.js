import React, { Component } from 'react'
import './App.css'
// import Header from './components/Header'
import Routes from './components/Routes'
import Nav from './components/Nav'
// import Ads from './components/Ads'
// import MyForm from './components/MyForm.js'
// import Footer from './components/Footer'
// import { Router } from 'react-router';

// React Router
import { BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  
  render() {
    
    return (   
        
      <Router>
        <div>
          {/* <Header /> */}
          <Nav />
          <Routes />
          {/* <Ads /> */}
          {/* <Footer /> */}

        </div>
      </Router>
          
      );
    }
  }

export default App