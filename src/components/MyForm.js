import React from 'react'
import MyBtn from '../components/MyBtn.js'
import { TiEdit } from "react-icons/ti";

// post add from
const Myform = props => {

    return (
        <form style={styles.myForm}
            
            onSubmit={props.addName}>
            
            <input type='text'               
                style={styles.input}
                name="postTitle"
                // used to get value
                value={props.postTitle}
                onChange={props.liveUpdateTitle}
                placeholder=" Title" />
            
            <input type='text'               
                style={styles.input}
                name="postDescription"
                // used to get value
                value={props.postDescription}
                onChange={props.liveUpdateDescription}
                placeholder=" What's good..." />
            
            <p style={styles.p}>Title: {props.titleInput}</p>

            <p style={styles.p}>Description: {props.descriptionInput}</p>

            <MyBtn style={styles.myBtn}> <TiEdit size={100} /> </MyBtn>

        </form>
    )
}

export default Myform

const styles= {
    myForm: {
        backgroundColor: 'rgba(51, 102, 153, .65)',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue',
        margin:'0 0 1em 0'
    },
    // myBtn: {
    //     height: '100px'
    // },
    input: {
        margin: '1em',
        padding: '0',
        height: '1.3em',
        width: '60%',
        color: 'black',
        backgroundColor: 'rgba(250, 244, 113, 1)',
        borderStyle: 'solid',
        borderRadius: '.4em',
        borderColor: 'rgba(51, 102, 153, 1)',
        fontSize: '1.25em',
        fontWeight: 'normal',
        cursor: 'auto',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Helvetica Neue'
    },
    p: {
        margin: '.5em 0 0 1em',
        fontFamily: 'Helvetica Neue'
    }
}