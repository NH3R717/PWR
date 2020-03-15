import React from 'react'
// import './Footer.css'
// import FAHome from 'react-icons/lib/fa/home'

// dummy component
// component declarations are capitalized

const Ads = props => {
    return (
        <div style={styles.aside}>
            <h2 style={styles.freshApps}>Fresh Apps</h2>
            {/* This should just be one ad place older. Example: */}
            <p style={styles.adBox}>Advert Image or/and title{props.adImg}{props.adTitle}</p>
        </div>
    )
    
}
export default Ads

//You will want to style this just for the ad. I would style the aside on the app.js page
const styles = {
    aside: {
        display: 'flex',
        flexDirection: 'column',
        width: '10em'
    },
    freshApps: {
        margin: '2em 0 0 .2em',
        
    },
    adBox: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '9em',
        height: '15em',
        textAlign: 'center',
        backgroundColor: 'dimGrey'
    },

}