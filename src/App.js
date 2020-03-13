import React, { Component } from 'react'
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import wizzlet_jr from './images/wizzlet_jr.jpg'



class App extends Component {

  render() {
    return (
      
      <div style={StyleSheet.container}>
        <Header pgTitle='Week 2 React Social Media App' />
        <p>This is text for the app.</p>
        <p>
          <img src={wizzlet_jr} alt="dog" style={styles.wizzlet_jr}/>
        </p>
        <Nav container />
        <Footer />
      </div>

    )
  }
}

export default App

const styles= {
  wizzlet_jr: {
    // padding removes boarder radius
    // padding: '1em', 
    borderRadius: '1em',
    margin: '2em'
  }
}

// 