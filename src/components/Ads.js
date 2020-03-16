import React from 'react'

const Ads = props => {
    
    return (
        <div style={styles.aside}>
            <h2 style={styles.freshApps}>Fresh Apps</h2>
            {/* This should just be one ad place older. Example: */}
            <ul key={props.id} style={styles.adImage}>
                <img style={styles.adBox} src={props.adImg} alt="advert" />
            </ul>
        </div>
    )
    
}
export default Ads

//You will want to style this just for the ad. I would style the aside on the app.js page
const styles = {
    aside: {
        display: 'flex',
        flexDirection: 'column',
        width: '10em',
        fontFamily: 'Helvetica Neue'
    },
    freshApps: {
        margin: '2em 0 0 .2em',
        color: 'rgba(3, 0, 39, 1)'
    },
    adBox: {
        display: 'flex',
        margin: '1em 0 0 0',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '9em',
        height: '15em',
        textAlign: 'center',
        backgroundColor: 'dimGrey'
    },
    adImage: {
        padding: '0',
        margin: '0'
    }

}