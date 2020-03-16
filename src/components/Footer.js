import React from 'react'

// dummy component
// component declarations are capitalized

const Footer = () => {

    return (
        <footer style={styles.footer}>

<p>Some footer text. ©2020 SE. All rights reserved.</p>
            </footer>
    )
    
}
export default Footer

const styles = {
    
    footer: {
        display: 'flex',
        fontSize: '0.85em',
        paddingRight: '3em',
        justifyContent: 'right',
        position: 'fixed', 
        bottom: '0',
        left: '0',
        right: '0',
        height: '4em'
    }

}