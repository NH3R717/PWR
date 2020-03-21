import React from 'react'
import { FaSearchDollar } from "react-icons/fa";

const Search = props => {

    return (
        <form
            style={styles.searchForm}
            onSubmit={props.searchMe}>
            <button style={styles.searchButton} onClick={props.delMe}> <FaSearchDollar size={20} /></button>
            <input
                style={styles.input}
                type= 'text'
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
        height: '1.3em',
        borderStyle: 'solid',
        borderRadius: '.4em',
        borderColor: 'rgba(51, 102, 153, 1)',
        // border: '',
        backgroundColor: 'rgba(250, 244, 113, 1)',
        fontSize: '1.25em',   
    },

    searchButton: {
        margin: '0 0 1em 0em',
        border: 'none',
        background: 'none',
        color: 'rgba(21, 30, 63, 1)',
    }
}