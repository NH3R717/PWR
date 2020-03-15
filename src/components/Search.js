import React from 'react'
// import MyBtn from '../components/MyBtn.js'
import { FaSearchDollar } from "react-icons/fa";

const Search = props => {

    return (
        <form
            style={styles.searchForm}
            onSubmit={props.searchMe}>
            <button style={styles.searchButton} onClick={props.delMe}> <FaSearchDollar size={20} /></button>
            <input
                style={styles.input}
                placeholder=" Search..." />
        </form>
    )
}

export default Search

const styles = {
    searchForm: {
        display: 'flex',
    },
    input: {
        margin: '1em 2em 0 0',
        // padding: '0',
        height: '1.3em',
        // width: '90%',
        color: 'black',
        backgroundColor: 'rgba(250, 244, 113, 1)',
        fontSize: '1.25em',
        // fontWeight: 'normal',
        // cursor: 'auto',
        // borderRadius: '0',
        // display: 'flex',
        // flexDirection: 'row',
        
    },
    searchButton: {
        margin: '0 0 1em 0em',
        border: 'none',
        background: 'none',
    }
}