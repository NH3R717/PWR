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
        // <button style={styles.myBtn} > <FiSend size={40} />
        //     {props.btnText}
        // </button>
        // <button style={styles.myBtn} > <FiSend size={40} />
        //     {props.btnText}
        //     
    )
}

export default MyBtn

const styles = {
    mUIBtn: {
        // padding: '0 0 4em 0',
        // margin: '.5em .4em .3em 0',
        // height: '2.3em',
        // width: '5em',
        color: 'rgba(21, 30, 63, 1)',
        // background: 'none',
        // border: 'none',
        // fontSize: '1em',
        // fontWeight: 'normal',
        cursor: 'pointer',
        // float: 'right',
        // borderRadius: '0em',
        // fontFamily: 'Helvetica Neue'
    },
    myBtn: {
        // padding: '0 0 4em 0',
        margin: '.5em .4em .3em 0',
        // height: '2.3em',
        // width: '5em',
        color: 'rgba(21, 30, 63, 1)',
        background: 'none',
        border: 'none',
        // fontSize: '1em',
        // fontWeight: 'normal',
        // cursor: 'pointer',
        float: 'right',
        // fontFamily: 'Helvetica Neue'
    }
}