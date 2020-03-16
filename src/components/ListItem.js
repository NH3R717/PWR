import React from 'react'
import wizzlet_jr from '../images/wizzlet_jr.jpg'
import { IoMdClose } from 'react-icons/io'
import { TiEdit } from "react-icons/ti";

//This needs to be a list item or a div. You are looping through this. Right now you have it looping a ul list.  So it creates a new ul each time. You only want to loop through the list item.
//Fix the syntax.
//Make this look more like your own app. You can style it how you like.
const ListItem = props => {
    
    return (
        //Your root element is already a ul 
        //Fix this so that the JSX syntax is correct.
        <ul key={props.id} style={styles.listGroup}>
            <div style={styles.avatarTitleButton}>
                <div style={styles.avatarTitle}> 
                <img src={wizzlet_jr} alt="dog" style={styles.wizzlet_jr} />
                <h3 style={styles.listTitle}>{props.val.postTitle}</h3> 
                </div>
                <div>
                <button style={styles.editButton} onClick={props.delMe}> <IoMdClose size={30} /></button>
                <button style={styles.deleteButton} > <TiEdit size={30} /></button>
                </div>
            </div>
            <img src={props.val.postImage} alt="post" style={styles.postImage} />
            <p style={styles.listDescription}>{props.val.postDescription}</p>
        </ul>      
    )

}

export default ListItem

const styles = {
    listGroup: {
        listStyle: 'none',
        padding: '0',
        backgroundColor: 'rgba(51, 102, 153, .85)',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue'
    },
    avatarTitleButton: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto'
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
        padding: '0 0 1.8em 1.8em',
        color: 'rgba(3, 0, 39, 1)'
    },
    editButton: {
        border: 'none',
        background: 'none',
        margin: '.2em 1.6em 0 0',
        padding: '2.4em 0em 1.1em 0em',
        float: 'right'
    },
    deleteButton: {
        border: 'none',
        background: 'none',
        margin: '.2em .2em 0 0',
        padding: '2.4em 0em 1.1em 0em',
        float: 'right'
    }
}