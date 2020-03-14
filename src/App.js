import React, { Component } from 'react'

// Components
import './App.css';
import Header from './components/header/Header'
import Nav from './components/Nav'
import Ad from './components/Ads'
// import Search from './components/search/Search.js'
import MyForm from './components/myForm/MyForm.js'
import Footer from './components/Footer'
import ListItem from './components/ListItem'


class App extends Component {

  state = {
    myInput: '',
    gList: [{
      postTitle: 'Another Taco ',
      postDescription: 'Tacos and a Corrona (the good kind)'
    }]
  }
  // for live update
  changeMeMan = e => {
    this.setState({myInput: e.target.value})
  }

  
  addName = e => {
    e.preventDefault()
    this.setState({
      // check out spread operator on with React keeping the state un-mutated
      gList: [...this.state.gList, {postTitle:this.state.myInput}]
    });

  e.target.reset()
  }

  removeName = key => {
    // check out splice method
    this.state.gList.splice(key, 1)
    this.setState({gList:this.state.gList})
  }

  render() {

    let myList = this.state.gList.map((element, i) => {
  
      return <ListItem key={i} val={element} />
      // below code still broken
      // return <ListItem key={i} val={element} delMe={()
      //   => this.removeName(i)} />
    
    })
      
      return (
      
        <div style={styles.container}>
          <header>
            {/* <Header /> */}
            <Header pgTitle='"Search"' />
            {/* <Search searchMe={this.search} /> */}
            </header>
          <main style={styles.main}>
            {/* <Nav style={styles.mainNav} container /> */}
            <Nav style={styles.mainNav} />
            <section style={styles.addPostCard}>
            <MyForm style={styles.mainForm}
                changeMeMan={this.changeMeMan}
                myInput={this.state.myInput}
                addName={this.addName}
              />
              
             <p>{myList}</p>
            </section>
            <aside>
            <Ad />
            </aside>
          </main>
          <Footer />
        </div>

      )
    }
  }

export default App

const styles= {
  // container: {
  //   display: 'flex',
  //   flexDirection: 'column'
  // },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // mainForm: {
  //   display: 'flex',
  //   flexDirection: 'column'
  // },
  // mainNav: {
  //   width: "20em"
  // },
  addPostCard: {
    display: 'flex',
    flexDirection: 'column'
  },
  // mainAside: {
  //   width: "20em"
  // },
  wizzlet_jr: {
    // padding removes boarder radius
    // padding: '1em', 
    borderRadius: '1em',
    margin: '2em'
  },
}

// Coolers.co color profile – https://coolors.co/151e3f-030027-336699-fcdebe-db2b39

// rgba(21, 30, 63, 1),  – Yankees Blue
// rgba(3, 0, 39, 1), – Rich Black (FOGRA29)
// rgba(51, 102, 153, 1); – Lapis Lazuli
// rgba(252, 222, 190, 1); – Very Pale Orange
// rgba(219, 43, 57, 1); – Rusty Red