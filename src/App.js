import React, { Component } from 'react'
import './App.css';
import Routes from './components/Routes'

//Remove links that you are not using
// import Header from './components/header/Header'
// import Search from './components/Search.js'
//import Nav from './components/Nav'
// import Ad from './components/Ads'
// import MyForm from './components/myForm/MyForm.js'
// import Footer from './components/Footer'
// import Profile from './components/Profile'
// import NewsfeedNewsfeedNewsfeedNewsfeedNewsfeedListItem from './components/NewsfeedListItem'

// set up Nav

import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <Routes />
                {/* Remove */}
                {/* <Nav /> */}
            </Router>
        );
    }
}

export default App