import React from 'react'

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
        fontFamily: 'Helvetica Neue',
        display: 'flex',
        color: 'rgba(21, 30, 63, 1)',
        fontSize: '0.85em',
        paddingRight: '3em',
        justifyContent: 'right',
        position: 'relative',
        bottom: '0',
        left: '0',
        right: '0',
        height: '3.2em'
    }
}