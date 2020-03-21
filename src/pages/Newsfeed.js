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
import Search from '../components/Search.js'
import MyForm from '../components/MyForm.js'
import Footer from '../components/Footer'
import ListItem from '../components/ListItem'
// import adImg from '../images/ads/freshApp1.jpg'

//Add the search function here. Then adjust the loop by adding the filter on line 80 mylist var.

function searchAlist(search) {
  return function (searchMe) {
    
    return searchMe.postTitle.toLowerCase().includes(search.toLowerCase()) || !search
    
  }
}

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
        adTitle: 'Task Tracker'
      },
      {
        adImg: require('../images/ads/freshApp2.jpg'),
        adTitle: 'Wagui TW'
      },
      {
      adImg: require('../images/ads/freshApp3.jpg'),
      adTitle: 'Taco Town'
      }],
      search: ''
    
  }

  //localStorage
  componentDidMount() {
    // getItem – reads local storage
    // retrieves value
    if (localStorage.getItem('postList')) {
      // declare variable
      let postList = JSON.parse(localStorage.getItem('postList'))
      // update state – adds current object
      // this.setState({postList:postList})
      this.setState({ postList })
    }
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
  
  searchList = e => {
    this.setState({ search: e.target.values })
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
    
// not adding first item to the LS – probably won't have time to figure out why (from video)
    
let postList = [...this.state.postList]
localStorage.setItem('postList', JSON.stringify(postList))
//You can empty the liveUpdates here by setting it = '' – done
this.setState({ titleInput: '' })
this.setState({ descriptionInput: '' })
    e.target.reset()
  
  }
  
}

removeName = key => {
  this.state.postList.splice(key, 1)
  //You will want to copy the original array
  this.setState({
    postList: [...this.state.postList]
  })
  let postList = [...this.state.postList]
  localStorage.setItem('postList', JSON.stringify(postList))
}

  render() {
    // for the postList
    let myList = this.state.postList.map((element, i) => {
      return <ListItem
        key={i}
        val={element}
        delMe={() => this.removeName(i)} />  
      
    }) 
    
    // for the adds
    let myAds = this.state.ads.map((element, i) => {
      return <Ads
        key={i}
        val={element} />
      
    })

    // for the search

    const { search } = this.state
    myList = this.state.postList.filter(searchAlist(search)).map((element, i) =>  {
      return <ListItem
        key={i}
        val={element}
        delMe={() =>this.removeName(i)} />

    })

      return (   
        <div style={styles.container}>
          <Header />
          <main style={styles.main}>
            <Nav style={styles.mainNav} />
            <section style={styles.addPostCard}>
            <Search searchList={this.searchList}
            placeholder=' Search ...'/>
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