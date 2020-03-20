import React from 'react'

import { NavLink } from 'react-router-dom'
// with functionality use class
const Nav = () => {

    return (
        <nav style={styles.navContainer}>
            {/* Profile for header? */}

           <NavLink to="/Profile">Profile</NavLink>
           <NavLink to="/NewsFeed">Newsfeed</NavLink>
           <NavLink to="/Messages">Messages</NavLink>
           <NavLink to="/Watch">Watch</NavLink>
           
        </nav>
        
    )

}

export default Nav

const styles = {
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        width: '10em',
        fontFamily: 'Helvetica Neue'
    },
    h2: {
        marginLeft: '1.4em',
        color: 'rgba(3, 0, 39, 1)',
    },
    ul: {
        display: 'flex',
        listStyleType: 'none',
        flexDirection: 'column',
    }
}