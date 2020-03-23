import React, { Component } from 'react'
import Nav from '../components/Nav'
import Ads from '../components/Ads'
import Footer from '../components/Footer'
import MessagesListItem from '../components/MessagesListItem'

// local storage being reset on page load.

class Messages extends Component {
    state = {
        messageList: [{
            sender: 'Roddey McMansion',
            message: 'Something about the stock market or Japan.',
            time: '24 Mar 20 17:23'
        },
        {
            sender: '"Ace"',
            message: 'Some total nonsense.',
            time: '24 Mar 20 06:36'
        },
        {
            sender: 'Total PAk',
            message: 'I just got back from Spain and now I stuck in home quarantine. :(',
            time: '24 Mar 20 11:47'
            

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
    

    componentDidMount(){
        // getItem – reads local storage
        // retrieves value
        if (localStorage.getItem('messageList')) {
          // declare variable
          let messageList = JSON.parse(localStorage.getItem('messageList'))
          // update state – adds current object
          // this.setState({messageList:messageList})
          this.setState({ messageList })
        }
      }
      removeName = key => {
        this.state.messageList.splice(key, 1)
        //You will want to copy the original array
        this.setState({
          messageList: [...this.state.messageList]
        })
        let messageList = [...this.state.messageList]
        localStorage.setItem('messageList', JSON.stringify(messageList))
      }
    
render() {
  
   // for the adds
   let myAds = this.state.ads.map((element, i) => {
    return <Ads
      key={i}
      val={element} />
  })
        let messageList = [...this.state.messageList]
localStorage.setItem('messageList', JSON.stringify(messageList))
        
            messageList = this.state.messageList.map((element, i) => {
            return <MessagesListItem
              key={i}
              val={element}
              delMe={() => this.removeName(i)} />  
            }) 
      
        return (       
            <section className="">
            <h1 style={styles.h1}>Messages</h1>
            <main style={styles.main}>
            <Nav />
              <ul style={styles.list}>{messageList}</ul>
              <aside style={styles.asideAd}>
              {myAds}
            </aside>
            </main>
            <Footer />
            </section>
        );
    }
}

export default Messages

const styles = {
    main: {
        display: 'flex',
    flexDirection: 'row',
    },
    list: {
      width: '100%'
  },
  asideAd: {
    margin: '0 1.8em 0 1em'
  },
    h1: {
      margin: '.6em 0 .82em 2em',
      fontFamily: 'Helvetica Neue',
      fontSize: '2em',
      color: 'rgba(3, 0, 39, 1)',
      textDecoration: 'none'
    }
}