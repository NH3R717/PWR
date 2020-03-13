import React, { Component } from 'react'
// import React from 'react';

// Files
import './App.css';
import Header from './components/header/Header'
// import Nav from './components/nav/Nav'
import Search from './components/search/Search.js'
import MyForm from './components/myForm/MyForm.js'
import Footer from './components/footer/Footer'
import ListItem from './components/listItem/ListItem'


// Images
import Wizzlet_jr from './images/wizzlet_jr.jpg'



class App extends Component {

  state = {
    myInput: '',
    gList: [{
      gName: 'Tofu',
      gPrice: ' $2.20'
    },
    {
      gName: 'Ice Cream',
      gPrice: ' $5.55'
    }]
  }
  
  changeMeMan = e => {
    this.setState({ myInput: e.target.value})
  }

  addName = e => {
    e.preventDefault()
  // replace the following 2 lines of code with a spread operator
  this.state.gList.push({gName:this.state.myImput})
  this.setState({ gList:this.state.gList })
  e.target.reset()
  }

  removeName = key => {
    // check out splice method
    this.state.gList.splice(key, 1)
    this.setState({gList:this.state.gList})
  }

  render() {

    let myList = this.state.gList.map((element, i) => {
  
  // Map holds key value pairs
  // array.map(function(currentValue, index, argument), thisValue)
  //It is returning the li. But it is not grabing the data.  You can figure this out.
      return <ListItem key={i} val={element} />
    })
    // this showing a parsing error:unexpected token (matches the video)?
    // return <ListItem key={i} val={element} delMe={()
    //   =>this.removeName(i)} /> 
    
    return (
      
      <div style={styles.container}>
        <Header pgTitle='Week 2 React Social Media App' />
        <main>
        <div>           
            <Search searchMe={this.search} />
            {/* <MyForm addName={this.addName} /> */}
            <MyForm
              changeMeMan={this.changeMeMan}
              myImput={this.state.myInput}
              addName={this.addName}
            />
          </div>
        {myList}
        <p>This is text for the app.</p>
        <img src={Wizzlet_jr} alt="dog" style={styles.wizzlet_jr} />
        {/* <h3> Lets go for a <FaBeer />? </h3> */}
  

          </main>
        {/* <Nav container /> */}
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