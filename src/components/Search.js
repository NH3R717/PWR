import React from 'react'
// import MyBtn from '../components/MyBtn.js'

const Search = props => {

    return (
        <form
            style={styles.searchForm}
            onSubmit={props.searchMe}>
            <input
                style={styles.input}
                placeholder="Search..." />
            {/* doesnt work with MyBtn uncomment */}
            {/* <MyBtn btnText='Search' /> */}
        </form>
    )
}

export default Search

const styles = {
    searchForm: {
       
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