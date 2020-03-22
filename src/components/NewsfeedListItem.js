import React from 'react'
import wizzlet_jr from '../images/wizzlet_jr.jpg'
import { IoMdClose } from 'react-icons/io'
import { TiEdit } from "react-icons/ti";

//This needs to be a list item or a div. You are looping through this. Right now you have it looping a ul list.  So it creates a new ul each time. You only want to loop through the list item.
//Fix the syntax.
const NewsfeedListItem = props => {
    
    return (
        //Your root element is already a ul 
        //Fix this so that the JSX syntax is correct.
        <li key={props.id} style={styles.listGroup}>
            <div style={styles.avatarTitleButton}>
                <div style={styles.avatarTitle}> 
                <img src={wizzlet_jr} alt="dog" style={styles.wizzlet_jr} />
                <span style={styles.listTitle}>{props.val.postTitle}</span> 
                </div>
                <div>
                <button style={styles.deleteButton} onClick={props.delMe}> <IoMdClose size={30} /></button>
                <button style={styles.editButton} > <TiEdit size={30} /></button>
                </div>
            </div>
            <img src={props.val.postImage} alt="post" style={styles.postImage} />
            <span style={styles.listDescription}>{props.val.postDescription}</span>
        </li>      
    )

}

export default NewsfeedListItem

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