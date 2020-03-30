import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
// import { FiSend } from "react-icons/fi";

const MyBtn = props => {
    return (
        <button style={styles.myBtn} >
        <IconButton style={styles.mUIBtn} aria-label="send post" component="span"> {props.btnText}
          <SendTwoToneIcon style={{ fontSize: 40 }}/>
        </IconButton>
        </button>    
    )
}

export default MyBtn

const styles = {
    mUIBtn: {
       
        color: 'rgba(21, 30, 63, 1)',
        cursor: 'pointer',
    },
    myBtn: {
        margin: '.5em .4em .3em 0',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
        border: 'none',
        float: 'right',
    }
}