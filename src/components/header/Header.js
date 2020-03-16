import React from 'react'
import Search from '../../components/Search.js'
import wizzlet_jr from '../../images/wizzlet_jr.jpg'
import s_cafe from '../../images/s_cafe.png'
import { IoIosSettings } from 'react-icons/io'

const Header = props => {
    
    return (
        <header style={styles.header}>
            <div>
                <img src={s_cafe} alt="logo" style={styles.s_cafe} />
            </div>
            <Search />
            <h1 style={styles.h1}>{props.pgTitle}</h1>
            <div style={styles.headerRight}>
                <img src={wizzlet_jr} alt="dog" style={styles.wizzlet_jr} />
                <h3 style={styles.h3}>Baby Wizzle</h3>
                <span style={styles.icon}> <IoIosSettings size={30} /> </span>
            </div>
        </header>
    )

}
export default Header

const styles= {
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    h1:{
        fontSize: '1em'
    },
    h3:{
        fontSize: '1em',
        marginTop: '2em',
        marginLeft: '.8em',
        marginRight: '-1em'
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
        borderRadius: '15em',
        margin: '1.7em 1.5em 1.5em 1.5em'
      }
}