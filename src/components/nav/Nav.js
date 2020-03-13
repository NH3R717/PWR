import React from 'react'
import MyBtn from '../buttons/MyBtn'

// React Icon
import { FaBeer } from 'react-icons/fa'

const Nav = () => {

    return (
        <nav style={styles.container}>
            <MyBtn btnText='Home' />
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