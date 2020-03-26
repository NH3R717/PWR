import React from 'react'

//container for a single ad.
const Ads = props => {
    return (
        <div style={styles.adImage} key={props.id}>
            <h2 style={styles.freshH2}>{props.val.adTitle}</h2>
            <img style={styles.adBox} src={props.val.adImg} alt="advert" />
        </div>
    )
}
export default Ads

const styles = {
    freshH2: {
        // margin: '2em 2.3em 0 .2em',
        color: 'rgba(3, 0, 39, 1)',
    },
    adBox: {
        display: 'flex',
        margin: '1em 0 0 0',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '11em',
        height: 'auto', 
    },
    adImage: {
        padding: '0',
        margin: '0'
    }
}