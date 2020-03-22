import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class Messages extends Component {
    state = {
        messageList: [{
            sender: 'Roddey McMansion',
            message: 'Something about the stock market or Japan'
        },
        {
            sender: '"Ace"',
            message: 'Some total nonsense.'
        },
        {
            sender: 'Total PAk',
            message: 'I just got back from Spain and now I stuck in home quarantine. :('

       }] 
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

        let messageList = [...this.state.messageList]
localStorage.setItem('messageList', JSON.stringify(messageList))
        
        messageList = this.state.messageList.map((element, i) => {
            return <ListItem
              key={i}
              val={element}
              delMe={() => this.removeName(i)} />  
            
          }) 
        return (       
            <section className="">
                <h1>Messages</h1>
                <ul style={styles.list}>{messageList}</ul>
            </section>
        );
    }
}

export default Messages

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}