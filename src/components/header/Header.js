// not using 'state' in header – using variable

import React from 'react'
import Nav from '../nav/Nav'
//Your file location was wrong from this file. 
import wizzlet_jr from '../../images/wizzlet_jr.jpg'

// dummy component
// not using state allowing uses of variable
// component declarations are capitalized

const Header = props => {
    return (
        <header style={styles.header}>
            <h1 styles={styles.h1}>{props.pgTitle}</h1>
            <Nav />
            <img src={wizzlet_jr} alt="dog" style={styles.wizzlet_jr} />
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
    }
}