import React from 'react'

const Nav = () => {

    return (
        <nav style={styles.navContainer}>
            <h2 style={styles.h2}>Navigation</h2>
            <ul style={styles.ul}>
            <a style={styles.a} href="#/">News Feed</a>
            <a style={styles.a} href="#/">Messages</a>
            <a style={styles.a} href="#/">Watch</a>
            </ul>
            
        </nav>
        
    )

}

export default Nav

const styles = {
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '10em'
    },
    h2: {
        marginLeft: '1.4em'
    },
    ul: {
        display: 'flex',
        listStyleType: 'none',
        flexDirection: 'column'
    }
}