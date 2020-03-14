// not using 'state' in header – using variable

import React from 'react'
import Search from '../../components/Search.js'

//Your file location was wrong from this file. 
import wizzlet_jr from '../../images/wizzlet_jr.jpg'
import s_cafe from '../../images/s_cafe.png'
import { IoIosSettings } from 'react-icons/io'


// dummy component
// not using state allowing uses of variable
// component declarations are capitalized

const Header = props => {
    return (
        <header style={styles.header}>
            <div>
                <img src={s_cafe} alt="logo" style={styles.s_cafe} />
            </div>
            {/* <Search searchMe={this.search} /> */}
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
        marginLeft: '1.6em'
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wizzlet_jr: {
        // padding removes boarder radius
        // padding: '1em', 
        borderRadius: '3em',
        width: '2.7em',
        height: '2.7em',
        marginTop: '1.5em'
      },
    s_cafe: {
        // padding removes boarder radius
        // padding: '1em', 
        borderRadius: '15em',
        width: '4em',
        height: '4em',
        marginTop: '1em',
        marginLeft: '1.3em'
      },
      icon: {
        // padding removes boarder radius
        // padding: '1em', 
        borderRadius: '15em',
        // width: '5em',
        // height: '5em',
        margin: '1.5em'
      }
}