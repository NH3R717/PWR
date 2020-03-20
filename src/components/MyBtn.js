import React from 'react'
import { FiSend } from "react-icons/fi";;

const MyBtn = props => {
    
    return (
    <button style={styles.myBtn} > <FiSend size={40} />
        {props.btnText}
        </button>
    )
    
}

export default MyBtn

const styles= {
    myBtn: {
        padding: '0 0 4em 0',
        margin: '.5em 1.4em 1.1em 0',
        height: '2.3em',
        width: '5em',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
        border: 'none',
        // fontSize: '1em',
        // fontWeight: 'normal',
        // cursor: 'pointer',
        float: 'right',
        borderRadius: '0em',
        fontFamily: 'Helvetica Neue'
    }
}