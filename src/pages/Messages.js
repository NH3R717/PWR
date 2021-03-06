import React, { Component } from 'react'
import MessagesListItem from '../components/MessagesListItem'

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
      }]
  }

  componentDidMount() {
    if (localStorage.getItem('messageList')) {
      let messageList = JSON.parse(localStorage.getItem('messageList'))
      this.setState({ messageList })
    }
  }
  removeName = key => {
    this.state.messageList.splice(key, 1)
    this.setState({
      messageList: [...this.state.messageList]
    })
    let messageList = [...this.state.messageList]
    localStorage.setItem('messageList', JSON.stringify(messageList))
  }

  render() {

    // for the adds
    // let myAds = this.state.ads.map((element, i) => {
    //   return <Ads
    //     key={i}
    //     val={element} />
    // })
    let messageList = [...this.state.messageList]
    localStorage.setItem('messageList', JSON.stringify(messageList))

    messageList = this.state.messageList.map((element, i) => {
      return <MessagesListItem
        key={i}
        val={element}
        delMe={() => this.removeName(i)} />
    })

    return (
      <div style={styles.allContainer}>
        {/* <Header /> */}
        <h1 style={styles.h1}>Messages</h1>
        <main style={styles.main}>
          {/* <Nav /> */}
          <ul style={styles.list}>{messageList}</ul>
          {/* <aside style={styles.asideAd}>
            {myAds}
          </aside> */}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Messages

const styles = {
  main: {
    display: 'flex',
  },
  list: {
    width: '100%'
  },
  h1: {
    margin: '.6em 0 .82em 2em',
    fontFamily: 'Helvetica Neue',
    fontSize: '2em',
    color: 'rgba(3, 0, 39, 1)',
    textDecoration: 'none'
  },
//   asideAd: {
//     margin: '0 1.8em 0 1em'
//   }
}