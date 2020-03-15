import React from 'react'
import MyBtn from '../../components/MyBtn.js'

const Myform = props => {

    return (
        <form style={styles.myForm}
            
            onSubmit={props.addName}>
            <input type='text'               
                style={styles.input}
                name="postTitle"
                // used to get value
                value={props.postTitle}
                onChange={props.liveUpdate}
                placeholder=" Title" />
            <input type='text'               
                style={styles.input}
                name="postDescription"
                // used to get value
                value={props.postDescription}
                onChange={props.liveUpdate}
                placeholder=" What's good..." />
            {/* <p>What's on your mind: {props.myInput}</p> */}
            <MyBtn style={styles.myBtn} btnText='Post' />
        </form>
    )

}

export default Myform

const styles= {
    myForm: {
        // display: 'flex',
        // flexDirection: 'column',
        backgroundColor: 'rgba(51, 102, 153, .85)',
        borderRadius: '.6em'
        // padding: '1em'
    },
    input: {
        margin: '1em',
        padding: '0',
        height: '1.3em',
        width: '60%',
        color: 'black',
        backgroundColor: 'rgba(250, 244, 113, 1)',
        fontSize: '1.25em',
        fontWeight: 'normal',
        cursor: 'auto',
        borderRadius: '0',
        display: 'flex',
        flexDirection: 'column'
    },
    myBtn: {
        // display: 'flex',
        // flexDirection: 'row',
        // // justifyContent: 'end',
        // alignItems: 'flexEnd'
        // float: 'right'
        paddingBottom: '1em'
    },
}