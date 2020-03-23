import React from 'react'
import { IoMdClose } from 'react-icons/io'

const MessageListItem = props => {

    return (
        <li key={props.id} style={styles.listGroup}>
            <div style={styles.messageContent}>
                <div style={styles.senderMessage}>
                    <h2 style={styles.sender}>{props.val.sender}</h2> 
                    <p style={styles.message}>{props.val.message}</p> 
                </div>
                <div style={styles.timeButton}>
                    <button style={styles.deleteButton} onClick={props.delMe}> <IoMdClose size={30} /></button>
                    <p style={styles.time}>{props.val.time}</p> 
                </div>
            </div>
        </li>      
    )
    
}

export default MessageListItem

const styles = {
    listGroup: {
        listStyle: 'none',
        margin: '0 1.6em 1em 0',
        padding: '0 1em 1.4em 1em',
        backgroundColor: 'rgba(51, 102, 153, .65)',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue'
    },
    messageContent: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0'
    },
    sender: {
        margin: '.6em 0 .4em .4em',
        padding: '0',
        color: 'rgba(3, 0, 39, 1)'
    },
    message: {
        margin: '.1.6em 0 .4em 1.5em',
        padding: '0',
        color: 'rgba(3, 0, 39, 1)'
    },
    timeButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0'
    },
   deleteButton: {
        border: 'none',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
        margin: '0 0 0 0',
        padding: '1em 0em 1.1em 0em',
        float: 'right'
   },
   time: {
        margin: '0',
        padding: '0',
        width: '4em',
        color: 'rgba(3, 0, 39, 1)'
},
}

