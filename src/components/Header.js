import React from 'react'
import Search from './Search.js'
import { NavLink } from 'react-router-dom'
import wizzlet_jr from '../images/wizzlet_jr.jpg'
import s_cafe from '../images/s_cafe.png'
import { IoIosSettings } from 'react-icons/io'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = props => {
    return (
        <header style={styles.header}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <img src={s_cafe} alt="logo" style={styles.s_cafe} />
                    </div>
                    <Search searchList={props.searchList} placeholder=' Search ...' />
                    <h1 style={styles.h1}>{props.pgTitle}</h1>
                    <div style={styles.headerRight}>
                        <img src={wizzlet_jr} alt="dog" style={styles.wizzlet_jr} />
                        <h3 style={styles.h3}>Baby Wizzlet</h3>
                        <NavLink to="/profile">
                            <button style={styles.icon} >
                                <IoIosSettings size={30} /> </button>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}
export default Header

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'Helvetica Neue'
    },
    h1: {
        fontSize: '1em'
    },
    h3: {
        fontSize: '1em',
        marginTop: '2em',
        marginLeft: '.8em',
        marginRight: '-1em',
        color: 'rgba(21, 30, 63, 1)',
    },
    headerRight: {
        display: 'flex',
    },
    wizzlet_jr: {
        borderRadius: '3em',
        width: '3em',
        height: '3em',
        marginTop: '1em'
    },
    s_cafe: {
        borderRadius: '15em',
        width: '4em',
        height: '4em',
        marginTop: '1em',
        marginLeft: '1.3em'
    },
    icon: {
        margin: '2.3em 1.5em 1.5em 1.5em',
        border: 'none',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
    }
}