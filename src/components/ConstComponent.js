import React from 'react';
// For dummy components – does not interact with the state. Used primarily for changes to the user interface.
//Adjust your spacing
const ConstComponent = props => {
     return (
          <form style={styles.formCont} onSubmit={props.addName}>
               <p>Enter Text: {props.displayName}</p>
               <input style={styles.input} placeholder="Some Text" />
          </form>
     )
}
export default ConstComponent;

const styles = {
     formCont: {
          
     }
}