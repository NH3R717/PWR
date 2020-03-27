import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// with functionality use class
const Nav = () => {
    return (
        <nav style={styles.navContainer}>
        <ButtonGroup orientation="vertical" variant="text" size="medium">
           
                <Button><NavLink style={styles.a} to="/NewsFeed">Newsfeed</NavLink></Button>
                <Button><NavLink style={styles.a} to="/Messages">Messages</NavLink></Button>
                <Button><NavLink style={styles.a} to="/Watch">Watch</NavLink></Button>
            
        </ButtonGroup>
        </nav>
    )
}

export default Nav

// add css link properties (hover)

const styles = {
    navContainer: {
        margin: '0 1em 0 0',
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