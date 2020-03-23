import React from 'react'

//this is the container for a single ad.
const Ads = props => {
    return (
        <div style={styles.adImage} key={props.id}>
            <h2 style={styles.freshApps}>{props.val.adTitle}</h2>
            <img style={styles.adBox} src={props.val.adImg} alt="advert" />
        </div>
    )
}
export default Ads

const styles = {
    aside: {
        display: 'flex',
        margin: '0 .5em 0 0',
        flexDirection: 'column',
        width: '10em',
        fontFamily: 'Helvetica Neue'
    },
    freshApps: {
        margin: '2em 2.3em 0 .2em',
        color: 'rgba(3, 0, 39, 1)'
    },
    adBox: {
        display: 'flex',
        margin: '1em 0 0 0',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '11em',
        height: 'auto',
        textAlign: 'center',
        backgroundColor: 'dimGrey'
    },
    adImage: {
        padding: '0',
        margin: '0'
    }
}