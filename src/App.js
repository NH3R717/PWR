import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Ad from './components/Ads'
import MyForm from './components/MyForm.js'
import Footer from './components/Footer'
import ListItem from './components/ListItem'
// import adImg from '../images/ads/freshApp1.jpg'

class App extends Component {
  state = {
    titleInput: '',
    descriptionInput: '',
    postList: [{
      postTitle: 'Another Taco',
      postDescription: 'Just ate some fresh Tacos — w/ Corona (the good kind).',
      //Added require to get the image
      postImage: require('../src/images/postMain.jpg')
    }],
    ads: [{
      adImg: require('../src/images/ads/freshApp1.jpg'),
      // { adImg }: require('../src/images/ads/freshApp1.jpg'),
    //   ad2: require('../src/images/ads/freshApp2.jpg'),
    //   ad3: require('../src/images/ads/freshApp3.jpg')
    }]
  }

  // Wk3 local storage code
  componentDidMount() {

    if (localStorage.getItem('postList')) {

      let postList = JSON.parse(localStorage.getItem('postList'))
      this.setState({ postList: postList })

}
  }

//   componentDidMount() {

//     let postList
//     if (postList = JSON.parse(localStorage.getItem('postList'))) {
      
//       let postList = JSON.parse(localStorage.getItem('postList'))

//       this.setState({ postList })
//     }
//       else{
//       alert('No data to added to local storage')
      
// }
//     }
      
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
      postList: [...this.state.postList, { postTitle: this.state.titleInput, postDescription: this.state.descriptionInput }]
      
    });
      // Wk3 local storage code
    // localStorage.setItem('postList', JSON.stringify(postList))
      e.target.reset()
      
  //You can empty the liveUpdates here by setting it = ''

  }
  }
  
  removeName = key => {
    this.state.postList.splice(key, 1)
    //You will want to copy the original array
    this.setState({ postList: this.state.postList })
    // localStorage.setItem('postList', JSON.stringify(postList))
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
              <Ad
              
              />
            </aside>
          </main>
          <Footer />
        </div>
      )
    }
  }

export default App

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