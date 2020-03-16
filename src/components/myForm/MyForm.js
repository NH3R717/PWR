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
        
            <MyBtn style={styles.myBtn} btnText='Post' />

        </form>
    )

}

export default Myform

const styles= {
    myForm: {
        backgroundColor: 'rgba(51, 102, 153, .85)',
        borderRadius: '.6em',
        fontFamily: 'Helvetica Neue'
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
        flexDirection: 'column',
        fontFamily: 'Helvetica Neue'
    },
    p: {
        margin: '.5em 0 0 1em',
        fontFamily: 'Helvetica Neue'
    }
}