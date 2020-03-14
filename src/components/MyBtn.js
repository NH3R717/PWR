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
        margin: '0',
        padding: '0',
        color: 'red',
        fontSize: '1.25em',
        fontWeight: 'normal',
        cursor: 'pointer',
        borderRadius: '1em',
        // display: 'flex',
        // flexDirection: 'row',
        // // justifyContent: 'end',
        // alignItems: 'flexEnd'
    }
}