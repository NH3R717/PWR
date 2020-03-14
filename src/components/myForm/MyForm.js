import React from 'react'
import MyBtn from '../../components/MyBtn.js'

const Myform = props => {

    return (
        <form style={styles.myForms}
            
            onSubmit={props.addName}>
            <input type='text'               
                style={styles.input}
                name="postTitle"
                // used to get value
                value={props.postTitle}
                onChange={props.changeMeMan}
                placeholder="Create Post" />
            {/* <p>New Item: {props.myInput}</p> */}
            
            <MyBtn style={styles.myBtn} btnText='Post' />

        </form>
    )

}

export default Myform

const styles= {
    myForm: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        margin: '1em',
        padding: '0',
        color: 'bisque',
        backgroundColor: 'coral',
        fontSize: '1.25em',
        fontWeight: 'normal',
        cursor: 'auto',
        borderRadius: '0',
        display: 'flex',
        flexDirection: 'column'
    },
    myBtn: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'end',
        alignItems: 'flexEnd'
    },
}