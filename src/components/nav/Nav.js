import React from 'react'
// import MyBtn from './components/buttons/MyBtn'

// React Icon
import { FaBeer } from 'react-icons/fa'

const Nav = () => {

    return (
        <nav style={styles.container}>
            {/* ./src/components/nav/Nav.js
Module not found: Can't resolve */}
            {/* <MyBtn btnText='Home' /> */}
            <h3> Lets go for a <FaBeer />? </h3>
        </nav>
        
    )
}

export default Nav

const styles= {
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
}