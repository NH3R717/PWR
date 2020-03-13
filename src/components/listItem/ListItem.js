import React from 'react'

const ListItem = props => {

    return (
        <li key={props.id} style={styles.list}>
            <span>{props.val.gName}</span> 
            <span>{props.val.gPrice}</span>
            <button onClick={props.delMe}>Delete</button>
    </li>
)

}

export default ListItem

const styles = {

}