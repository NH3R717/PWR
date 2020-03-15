import React from 'react'

// dummy component "small pieces of reuseable code pushed through 'props'"

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
        // marginRight: '1.8em',
        padding: '0',
        margin: '-.4em 1.4em .6em 0',
        height: '2.3em',
        width: '5em',
        color: 'rgba(21, 30, 63, 1)',
        background: 'rgba(219, 43, 57, .9)',
        fontSize: '1em',
        fontWeight: 'normal',
        cursor: 'pointer',
        float: 'right',
        borderRadius: '0em',
        
        // display: 'flex',
        // flexDirection: 'row',
        // // justifyContent: 'end',
        // alignItems: 'flexEnd'
    }
}