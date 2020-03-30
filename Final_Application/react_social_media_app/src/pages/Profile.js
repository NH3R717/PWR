import React, { Component } from 'react'
import ProfileListItem from '../components/ProfileListItem'

class Profile extends Component {
    state = {
        userArray: [],
    }

    // fetching data from AIP
    componentDidMount() {
        this.fetchRandomUser();
    }
    fetchRandomUser() {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.results.map(user => ({
                picture: `${user.thumbnail}`,
                first: `${user.name.first}`,
                last: `${user.name.last}`,
                name: `${user.name.first} ${user.name.last}`,
                login: `${user.login.username}`,
                email: `${user.email}`,
                phone: `${user.phone}`,
                street: `${user.location.street.number}, ${user.location.street.name}`,
                city: `${user.location.city}`,
                state: `${user.location.state}`,
                postcode: `${user.location.postcode}`,
            }
            )))
            .then(userArray => this.setState({
                userArray,
                //You did not use this above.
                isLoading: false
            }))
            .then(parsedJSON => console.log(parsedJSON.results))
            .catch(error => console.log('parsing failed', error))
    }

    render() {

        const { userArray } = this.state
        let contactsNew = userArray.map(contact => {
            const { picture, username, street, city, state, postcode, email, phone, name, first, last, login } = contact
            return <ProfileListItem
                key={username}
                picture={picture}
                name={name}
                first={first}
                last={last}
                login={login}
                street={street}
                city={city}
                state={state}
                postcode={postcode}
                email={email}
                phone={phone}
            />
        })

        return (
            <div style={styles.allContainer}>
                <h1 style={styles.h1}>Profile</h1>
                <main style={styles.main}>
                    <ul style={styles.list}>{contactsNew}</ul>
                </main>
            </div>
        );
    }
}

export default Profile

const styles = {
    allContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0',
        margin: '0',
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0',
        margin: '0',
        justifyContent: 'space-between',
    },
    list: {
        padding: '0',
        margin: '0',
    },
    h1: {
        margin: '.6em 0 1em 2em',
        fontFamily: 'Helvetica Neue',
        fontSize: '2em',
        color: 'rgba(3, 0, 39, 1)',
        textDecoration: 'none'
    },
}

