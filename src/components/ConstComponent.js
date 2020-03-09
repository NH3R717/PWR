// You did not use a Component module here...
//import React, { Component } from 'react';
import React from 'react';
// For dummy components – does not interact with the state.
//Spacing is off
const ConstComponent = props => {
    return (
         <form style={styles.formCont} onSubmit={props.addName}>
              <p>Current Student: {props.displayName}</p>
              <input style={styles.input}
                           value={props.currentName}
                           onChange={props.changeName}
                           name="mName"
                           placeholder="Name..." />
         </form>
    )
}
export default ConstComponent;

const styles = {
     formCont: {
          
     }
}