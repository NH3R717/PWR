import React from 'react'
import { IoMdClose } from 'react-icons/io'

const MessageListItem = props => {
    
    return (
     
        <li key={props.id} style={styles.listGroup}>
            <div style={styles.avatarTitleButton}>
            
                
                <h2 style={styles.listTitle}>{props.val.sender}</h2> 
                <p style={styles.listTitle}>{props.val.message}</p> 
                <button style={styles.deleteButton} onClick={props.delMe}> <IoMdClose size={30} /></button>
               
            </div>

        </li>      
    )

}

export default MessageListItem

const styles = {
    listGroup: {
        listStyle: 'none',
        margin: '0 0 1em 0',
        padding: '0 1em 2em 1em',
        backgroundColor: 'rgba(51, 102, 153, .85)',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue'
    },
    avatarTitleButton: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0'
    },
    avatarTitle: {
        display: 'flex',
        margin: '.0 0 .6em 1.2em'
    },
    wizzlet_jr: {
        borderRadius: '3em',
        width: '2.5em',
        height: '2.5em',
        marginTop: '1.5em'
    },
    postImage: {
        display: 'flex',
        margin: '0 auto 1em auto',
        width: 'auto',
        height: '15em',
        borderRadius: '.4em'
    },
    listTitle: {
        padding: '0',
        margin: '1.7em 0 0 .4em',
        color: 'rgba(3, 0, 39, 1)'
    },
    listDescription: {
        margin: '0',
        padding: '0',
        color: 'rgba(3, 0, 39, 1)'
    },
    editButton: {
        border: 'none',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
        margin: '.2em .2em 0 0',
        padding: '2.4em 0em 1.1em 0em',
        float: 'right'
    },
   deleteButton: {
        border: 'none',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
        margin: '.2em 1.6em 0 0',
        padding: '2.4em 0em 1.1em 0em',
        float: 'right'
    }
}

