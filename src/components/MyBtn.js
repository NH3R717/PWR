import React from 'react'
//Remove extra spacing.
const MyBtn = props => {
    
    return (
    <button style={styles.myBtn} >
        {props.btnText}
    </button>
    )
    
}

export default MyBtn

const styles= {
    myBtn: {
        padding: '0',
        margin: '.5em 1.4em 1.1em 0',
        height: '2.3em',
        width: '5em',
        color: 'rgba(21, 30, 63, 1)',
        background: 'rgba(219, 43, 57, .9)',
        fontSize: '1em',
        fontWeight: 'normal',
        cursor: 'pointer',
        float: 'right',
        borderRadius: '0em',
        fontFamily: 'Helvetica Neue'
    }
}