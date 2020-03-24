import React from 'react'

const ProfileListItem= props => {
    return (
        <ul key={props.user} style={styles.listGroup}>

            {/* What is better way to lay this out - the div? */}
            <div style={styles.profileContent}>
            <div style={styles.nameGroup}>
            <div style={styles.lineItem}>
            <li>User Name: </li>
            <li style={styles.listDescription}>{props.login}</li>
            </div>
            <div style={styles.lineItem}>
            <li>First Name: </li>
            <li style={styles.listDescription}>{props.first}</li>
            </div>
            <div style={styles.lineItem}>
            <li>Last Name: </li>
            <li style={styles.listDescription}>{props.last}</li>
            </div>
            <div style={styles.lineItem}>
            <li>Phone: </li>
            <li style={styles.listDescription}>{props.phone}</li>
            </div>
            </div>

            <div style={styles.addressGroup}>
            <div style={styles.lineItem}>      
            <li>Street: </li>
            <li style={styles.listDescription}>{props.street}</li>
            </div>
            <div style={styles.lineItem}>
            <li>City: </li>
            <li style={styles.listDescription}>{props.city}</li>
            </div>
            <div style={styles.lineItem}>
            <li>State: </li>
            <li style={styles.listDescription}>{props.state}</li> 
            </div>
            <div style={styles.lineItem}>
            <li>Zipcode: </li>
            <li style={styles.listDescription}>{props.postcode}</li>
            </div>
            </div>
            </div>
            
        </ul>      
    )
}

export default ProfileListItem

const styles = {
    listGroup: {

        listStyle: 'none',
        margin: '0 0 1em 0',
        padding: '0 1em 2em 1em',
        width: '100%',
        backgroundColor: 'rgba(51, 102, 153, .65)',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue'
    },
    profileContent: {
        // margin: '1em 0 1em 0',
        padding: '1em 0 .5em 0',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0'
    },
    lineItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0'
    }
  
}