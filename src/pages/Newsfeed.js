import React, { Component } from 'react'
// import './App.css';
import Header from '../components/header/Header'
import Search from '../components/Search.js'
// import Nav from '../components/Nav'
import Ads from '../components/Ads'
import MyForm from '../components/myForm/MyForm.js'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import ListItem from '../components/ListItem'
// import adImg from './images/ads/freshApp1.jpg'

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
    }],
    ads: [{
      adImg: require('../images/ads/freshApp1.jpg'),
      adTitle: 'Fresh App'
      // { adImg }: require('../src/images/ads/freshApp1.jpg'),
    //   ad2: require('../src/images/ads/freshApp2.jpg'),
    //   ad3: require('../src/images/ads/freshApp3.jpg')
    }],
    search: ''
  }

  //This is getting the value for only the first input.
  //Duplicate this function to get the post description
  //Or you you can make it more dynamic and use the value of the name attribute in JSX.

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


  liveUpdateTitle = e => {
    this.setState({titleInput: e.target.value})
  }
  liveUpdateDescription = e => {
    this.setState({descriptionInput: e.target.value})
  }
  
  searchList = e => {
    this.setState({ search: e.target.values })
}

  // Still not validating
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
    let myList = this.state.postList.map((element, i) => {

      return <ListItem
        key={i}
        val={element}
        delMe={() => this.removeName(i)} />  
    })

    const { search } = this.state
    myList = this.state.postList.filter(searchAlist(search)).map((element, i) =>  {

      return <ListItem
        key={i}
        val={element}
        delMe={() =>this.removeName(i)} />


    })
    //Add a variable here to map through the ads object.
      return (   
        <div style={styles.container}>
          <Header />
          <Search searchList={this.searchList}
            placeholder=' Search ...'/>
          <main style={styles.main}>
            {/* <Nav style={styles.mainNav} /> */}
            <section style={styles.addPostCard}>
              <Profile />
              <MyForm style={styles.mainForm}
                liveUpdateTitle={this.liveUpdateTitle}
                titleInput={this.state.titleInput}
                liveUpdateDescription={this.liveUpdateDescription}
                descriptionInput={this.state.descriptionInput}
                addName={this.addName} />
                {/* //You have a ul here so you don't need the ul at the list item. */}
                <ul style={styles.list}>{myList}</ul>
            </section>
            <aside style={styles.asideAd}>
              {/* Loop through the ad object in the state */}
              <Ads
              
              />
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