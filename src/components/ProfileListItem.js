import React from 'react'

const ProfileListItem= props => {
    return (
        <ul key={props.user} style={styles.listGroup}>
            <li style={styles.listDescription}>{props.val.picture}</li>
            <li style={styles.listDescription}>{props.val.name.first}</li>
            <li style={styles.listDescription}>{props.val.name.last}</li>
            <li style={styles.listDescription}>{props.val.login.userName}</li>
            <li style={styles.listDescription}>{props.val.login.password}</li>
            <li style={styles.listDescription}>{props.val.email}</li>
            <li style={styles.listDescription}>{props.val.phone}</li>
            <li style={styles.listDescription}>{props.val.location.street}</li>
            <li style={styles.listDescription}>{props.val.location.city}</li>
            <li style={styles.listDescription}>{props.val.location.state}</li>
            <li style={styles.listDescription}>{props.val.location.postcode}</li>
        </ul>      
    )

}

export default ProfileListItem

const styles = {
    listGroup: {
        listStyle: 'none',
        margin: '0 0 1em 0',
        padding: '0 1em 2em 1em',
        backgroundColor: 'rgba(51, 102, 153, .65)',
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