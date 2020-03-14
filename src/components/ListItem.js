import React from 'react'

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