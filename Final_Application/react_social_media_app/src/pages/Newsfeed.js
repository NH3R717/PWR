import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Ads from '../components/Ads'
import MyForm from '../components/MyForm.js'
import Footer from '../components/Footer'
import NewsfeedListItem from '../components/NewsfeedListItem'

function searchAlist(search) {
  return function (searchMe) {
    return searchMe.postTitle.toLowerCase().includes(search.toLowerCase()) || !search
  }
}

class Newsfeed extends Component {
  
  state = {
    titleInput: '',
    descriptionInput: '',
    // main post data object
    postList: [{
      postTitle: 'Another Taco',
      postDescription: 'Just ate some fresh Tacos — w/ Corona (the good kind).',
      postImage: require('../images/postMain.jpg')
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

  //localStorage function
  componentDidMount() {
    if (localStorage.getItem('postList')) {
      let postList = JSON.parse(localStorage.getItem('postList'))
      this.setState({ postList })
    }
  }

  liveUpdateTitle = e => {
    this.setState({titleInput: e.target.value})
  }

  liveUpdateDescription = e => {
    this.setState({descriptionInput: e.target.value})
  }
  
  searchList = e => {
    this.setState({ search: e.target.value })
}

// adds input values to data object
addName = e => {
  e.preventDefault()
  //This is grabbing only the postTitle if it is at the first level
  //You need to have it point to the postList then postTitle. Its not drilling  down the object
  if (this.state.postList.titleInput === 'null' || this.state.postList.titleInput === '') {
    alert('Add a title.');
  // if (this.state.postList.titleInput.val === 'null' || this.state.postList.titleInput.val === '') {
  //   alert('Add a title.');
  } else if (this.state.postList.postDescription === '' || this.state.postList.postDescription === '') {
      alert('Add a description.');
  } else {
  this.setState({
    postList: [...this.state.postList, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
  });
    
// ** not adding first item to the LS – probably won't have time to figure out why (from video)  
let postList = [...this.state.postList]
localStorage.setItem('postList', JSON.stringify(postList))
this.setState({ titleInput: '' })
this.setState({ descriptionInput: '' })
e.target.reset()
  }
}

  // deletes selected 
removeName = key => {
  this.state.postList.splice(key, 1)
  this.setState({
    postList: [...this.state.postList]
  })
  let postList = [...this.state.postList]
  localStorage.setItem('postList', JSON.stringify(postList))
}

  render() {
    // for the postList
    let myList = this.state.postList.map((element, i) => {
      return <NewsfeedListItem
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
      return <NewsfeedListItem
        key={i}
        val={element}
        delMe={() =>this.removeName(i)} />
    })

      return (   
        <div style={styles.container}>
          <Header searchList={this.searchList} />
          <h1 style={styles.h1}>Newsfeed</h1>
          <main style={styles.main}>
            <Nav style={styles.mainNav} />
            <section style={styles.addPostCard}>
              <MyForm style={styles.mainForm}
                liveUpdateTitle={this.liveUpdateTitle}
                titleInput={this.state.titleInput}
                liveUpdateDescription={this.liveUpdateDescription}
                descriptionInput={this.state.descriptionInput}
                addName={this.addName} />
                <li style={styles.list}>{myList}</li>
            </section>
            <aside style={styles.asideAd}>
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
  mainNav: {
    margin: '2em 0 2em 0'
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
  asideAd: {
    margin: '0 .8em 0 1em'
  },
  wizzlet_jr: {
    borderRadius: '1em',
    margin: '2em'
  },
  h1: {
    margin: '.6em 0 .82em 2em',
    fontFamily: 'Helvetica Neue',
    fontSize: '2em',
    color: 'rgba(3, 0, 39, 1)',
    textDecoration: 'none'
  }
}