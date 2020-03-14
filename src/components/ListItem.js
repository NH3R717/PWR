import React from 'react'


//This needs to be a list item or a div. You are looping through this. Right now you have it looping a ul list.  So it creates a new ul each time. You only want to loop through the list item.
//Fix the syntax.
const ListItem = props => {
    return (
        <ul key={props.id} style={styles.list}>
            <li>{props.val.postTitle}</li> 
            <li>{props.val.postDescription}</li>
            <button onClick={props.delMe}>Delete</button>
        </ul>      
)

}

export default ListItem

const styles = {

}