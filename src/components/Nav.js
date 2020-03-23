import React from 'react'
import { NavLink } from 'react-router-dom'

// with functionality use class
const Nav = () => {
    return (
        <nav style={styles.navContainer}>
            {/* Profile for header? */}
            {/* Profile should go where the sprocket is in the header. Not in the navigation */}
            <NavLink style={styles.a} to="/Profile">Profile</NavLink>
            <NavLink style={styles.a}  to="/NewsFeed">Newsfeed</NavLink>
            <NavLink style={styles.a}  to="/Messages">Messages</NavLink>
            <NavLink style={styles.a}  to="/Watch">Watch</NavLink>
        </nav>
    )
}

export default Nav

// add css link properties (hover)

const styles = {
    navContainer: {
        padding: '2em 0 0 1.5em',
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
    },
    a: {
        fontFamily: 'Helvetica Neue',
        fontSize: '1.3em',
        fontWeight: '900',
        lineHeight: '1.7em',
        color: 'rgba(51, 102, 153, 1)',
        textDecoration: 'none'
    }
}