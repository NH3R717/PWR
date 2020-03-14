import React from 'react'
// import './Footer.css'
// import FAHome from 'react-icons/lib/fa/home'

// dummy component
// component declarations are capitalized

const Ads = () => {

    return (
        <aside style={styles.aside}>

<p style={styles.adBox}>Advert #1</p>
<p style={styles.adBox}>Advert #2</p>
            </aside>
    )
    
}
export default Ads

const styles = {
    
    aside: {
        display: 'flex',
        flexDirection: 'column',
        width: '10em'
    },
    adBox: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '9em',
        height: '20em',
        textAlign: 'center',
        backgroundColor: 'dimGrey'
        // contentJusitfy: 'center'
    },

}