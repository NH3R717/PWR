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
    postList: [{
      postTitle: 'Another Taco',
      postDescription: 'Just ate some fresh Tacos — w/ Corona (the good kind).',
      //Added require to get the image
      postImage: require('../src/images/postMain.jpg')
    }],
    ads: [{
      ad1: require('../src/images/ads/freshApp1.jpg'),
      ad2: './images/ads/freshApp2.jpg',
      ad3: './images/ads/freshApp3.jpg',
    }]
  }

  // for live update (may use later)
  //This is getting the value for only the first input.
  //Duplicate this function to get the post description
  //Or you you can make it more dynamic and use the value of the name attribute in JSX.
  liveUpdate = e => {
    //This should get the post title
    this.setState({myInput: e.target.value})
  }

  addName = e => {
    e.preventDefault()
    this.setState({
      // check out spread operator on with React keeping the state un-mutated
      // You are putting the value of myInput twice. One should be for the title and one for the description.
      postList: [...this.state.postList, {postTitle:this.state.myInput, postDescription:this.state.myInput}]
    });

  e.target.reset()
  }

  removeName = key => {
    // check out splice method
    this.state.postList.splice(key, 1)
    //You will want to copy the orginal array
    this.setState({postList:this.state.postList})
  }

  render() {
    let myList = this.state.postList.map((element, i) => {
      return <ListItem key={i} val={element} delMe={() => this.removeName(i)} />  
    })    
    //Add a variable here to map through the ads object.
      return (   
        <div style={styles.container}>
          <Header />
          <main style={styles.main}>
            <Nav style={styles.mainNav} />
            <section style={styles.addPostCard}>
              <MyForm style={styles.mainForm}
                  liveUpdate={this.liveUpdate}
                  myInput={this.state.myInput}
                  addName={this.addName} />
                <ul style={styles.list}>{myList}</ul>
            </section>
            <aside style={styles.asideAd}>
              {/* Loop through the ad object in the state */}
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
    flexDirection: 'column',
    margin: '.5em',
    padding: '.5em',
    width: '65%',
    // background:'rgba(219, 43, 57, .2)'
  },
  list: {
    padding: '0'
  },
  // mainAside: {
  //   width: "20em"
  // },
  asideAd: {
    // display: 'flex',
    // flexDirection: 'column',
    // width: '65%'
  },
  wizzlet_jr: {
    // padding removes boarder radius
    // padding: '1em', 
    borderRadius: '1em',
    margin: '2em'
  },
}