import React from 'react'
// import './Footer.css'
// import FAHome from 'react-icons/lib/fa/home'

// dummy component
// component declarations are capitalized

const Footer = () => {

    return (
        <footer style={styles.footer}>

<p>Some footer text. ©2020 LE. All rights reserved.</p>
            </footer>
    )
    
}
export default Footer

const styles = {
    
    footer: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '0.65em',
        padding: '0',
        justifyContent: 'right'
    }

}