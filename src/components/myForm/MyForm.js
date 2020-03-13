import React from 'react'
import MyBtn from '../buttons/MyBtn'

const Myform = props => {

    return (
        <form
            
            style={styles.myForms}
            onSubmit={props.addName}>
            <input type='text'               
                style={styles.input}
                name="gName"
                value={props.gName}
                onChange={props.changeMeMan}
                placeholder="Name" />
            <p>New Item: {props.myImput}</p>
            {/* doesnt work with MyBtn uncomment */}
            <MyBtn btnText='Add' />

        </form>
    )

}

export default Myform

const styles= {
    myForm: {
       
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
        flexDirection: 'row'
    }
}