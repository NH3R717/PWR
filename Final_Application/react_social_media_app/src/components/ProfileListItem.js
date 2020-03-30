import React from 'react'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar';
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'

const ProfileListItem = props => {
    return (
        <Card key={props.user} style={styles.listGroup}>

            <div style={styles.profileContent}>
                <header style={styles.header}>
                    <Avatar style={styles.avatar} src="/broken-image.jpg" />
                    <h3 style={styles.userID}>{props.login}</h3>
                </header>
                <div style={styles.nameGroup}>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>First Name: </li>
                        <li style={styles.lineItemDescription}>{props.first}</li>
                    </div>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>Last Name: </li>
                        <li style={styles.lineItemDescription}>{props.last}</li>
                    </div>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>Phone: </li>
                        <li style={styles.lineItemDescription}>{props.phone}</li>
                    </div>
                </div>

                <div style={styles.addressGroup}>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>Street: </li>
                        <li style={styles.lineItemDescription}>{props.street}</li>
                    </div>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>City: </li>
                        <li style={styles.lineItemDescription}>{props.city}</li>
                    </div>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>State: </li>
                        <li style={styles.lineItemDescription}>{props.state}</li>
                    </div>
                    <div style={styles.lineItemGroup}>
                        <li style={styles.lineItemType}>Zipcode: </li>
                        <li style={styles.lineItemDescription}>{props.postcode}</li>
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default ProfileListItem

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 0 1em 0'
    },
    userID: {
        margin: '.7em 0 0 1em'
    },
    avatar: {
        height: '60px',
        width: '60px'
    },
    listGroup: {
        listStyle: 'none',
        display: 'flex',
        padding: '0 1em 0 1em',
        justifyContent: 'space-between',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue'
    },
    nameGroup: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 .5em 0 .5em',
        justifyContent: 'space-between',
    },
    addressGroup: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 .5em 0 .5em',
        justifyContent: 'space-between',
    },
    profileContent: {
        padding: '1em 0 .5em 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0'
    },
    lineItemGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 0 .5em 0'
    },
    lineItemType: {
        display: 'flex',
        fontSize: '1.5em',
        justifyContent: 'space-between',
        margin: '0'
    },
    lineItemDescription: {
        display: 'flex',
        fontSize: '1.2em',
        justifyContent: 'space-between',
        margin: '0'
    }
}