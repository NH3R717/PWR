import React, { Component } from 'react'
//Remove if not using.
//import './App.css';
//When you move a component the location will change.
//Where is this file located now?
//.. means go up a level, then find the components folder. Then the file.
import Header from '../components/Header'
import Nav from '../components/Nav'
//THIS WAS MISSING THE S
//import Ad from '../components/Ads'
import Ads from '../components/Ads'
import MyForm from '../components/MyForm.js'
import Footer from '../components/Footer'
import ListItem from '../components/ListItem'
// import adImg from '../images/ads/freshApp1.jpg'

class Newsfeed extends Component {
  state = {
    titleInput: '',
    descriptionInput: '',
    postList: [{
      postTitle: 'Another Taco',
      postDescription: 'Just ate some fresh Tacos — w/ Corona (the good kind).',
      //Added require to get the image
      postImage: require('../images/postMain.jpg')
      //postImage: require('../src/images/postMain.jpg')
    }],
    ads: [
      {
        adImg: require('../images/ads/freshApp1.jpg'),
        adTitle: 'Fresh App'
      },
      {
        adImg: require('../images/ads/freshApp2.jpg'),
        adTitle: 'Fresh App New and Improved'
      },
      {
      adImg: require('../images/ads/freshApp3.jpg'),
      adTitle: 'Fresh App New and Improved'
      }
    ]
  }

  //This is getting the value for only the first input.
  //Duplicate this function to get the post description
  //Or you you can make it more dynamic and use the value of the name attribute in JSX.

  liveUpdateTitle = e => {
    this.setState({titleInput: e.target.value})
  }
  liveUpdateDescription = e => {
    this.setState({descriptionInput: e.target.value})
  }
  
  addName = e => {
    e.preventDefault()
    if (this.state.postTitle === 'null' || this.state.postTitle === '') {
      alert('Add a title.');
    } else if (this.state.postDescription === '' || this.state.postDescription === '') {
        alert('Add a description.');
    } else {
    this.setState({
      postList: [...this.state.postList, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
    });
    this.setState({ titleInput: '' })
    this.setState({ descriptionInput: '' })
    e.target.reset()
    //You can empty the liveUpdates here by setting it = ''
    }
  }
  removeName = key => {
    this.state.postList.splice(key, 1)
    //You will want to copy the original array
    this.setState({postList:this.state.postList})
  }

  render() {
    let myList = this.state.postList.map((element, i) => {
      return <ListItem key={i} val={element} delMe={() => this.removeName(i)} />  
    })    
    //Add a variable here to map through the ads object.

    let myAds = this.state.ads.map((element, i) => {
      return <Ads key={i} val={element} />
    })
      return (   
        <div style={styles.container}>
          <Header />
          <main style={styles.main}>
            <Nav style={styles.mainNav} />
            <section style={styles.addPostCard}>
              <MyForm style={styles.mainForm}
                liveUpdateTitle={this.liveUpdateTitle}
                titleInput={this.state.titleInput}
                liveUpdateDescription={this.liveUpdateDescription}
                descriptionInput={this.state.descriptionInput}
                addName={this.addName} />
                {/* //You have a ul here so you dont need the ul at the list item. */}
                <ul style={styles.list}>{myList}</ul>
            </section>
            <aside style={styles.asideAd}>
              {/* Loop through the ad object in the state */}
              {/* <Ads /> */}
              {myAds}
            </aside>
          </main>
          <Footer />
        </div>
      )
    }
  }

export default Newsfeed

const styles= {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addPostCard: {
    display: 'flex',
    flexDirection: 'column',
    margin: '.5em',
    padding: '.5em',
    width: '65%',
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
    borderRadius: '1em',
    margin: '2em'
  },
}