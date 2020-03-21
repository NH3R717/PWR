import React, { Component } from 'react'
import './App.css'
import Routes from './components/Routes'
// import Nav from './components/Nav'
// import Header from './components/Header'
// import Ads from './components/Ads'
// import Footer from './components/Footer'


// React Router
import { BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  
  render() {
    
    return (   
        
      <Router>
        <div>

          {/* <Header />
          <Nav /> */}
          <Routes />
          {/* <Ads />
          <Footer /> */}

        </div>
      </Router>
          
      );
    }
  }

export default App