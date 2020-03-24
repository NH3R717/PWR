import React, { Component } from 'react'
import ProfileListItem from '../components/ProfileListItem'

class Profile extends Component {

    state = {
        contacts: []
    }
           
// fetching data from AIP
    componentDidMount() {
        this.fetchRandomUser();
}

    //Your fetch is working correctly.  The problem is in your render.
    fetchRandomUser() {

        this.setState({
            
            contacts: []
        })

        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(user => ({
                picture: `${user.thumbnail}`,
                //You have two inputs for this so it would look like this.
                first:`${user.name.first}`,
                last:`${user.name.last}`,
                name: `${user.name.first} ${user.name.last}`,
                login: `${user.login.userName}, ${user.login.password}`,
                email: `${user.email}`,
                phone: `${user.phone}`,
                location: `${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode} `
            }
        )))
        .then(contacts => this.setState({
            contacts,
            //You did not use this above.
            isLoading: false
        }))
        .then(parsedJSON => console.log(parsedJSON.results))
        .catch(error => console.log('parsing failed', error))
        
    }

    render() {
        //Get the state
        const { contacts } = this.state

        // Use destructuring here
        // Declare variables
        // This needs to change slightly.


        // let contactsNew = this.state.contacts.map(contact => {
        //     const 
        
            let contactsNew =contacts.map(contact => {
                const  { picture, username, street, city, state, zipcode, email, phone, name, first, last } = contact;
            // let contactsNew = this.state.contacts.map(contact => {
            //     const  { picture, username, fname, lname, street, city, state, zipcode, email, phone } = contacts;


            return <ProfileListItem
                        // key={i}
                        // val={element}
                        picture={picture}
                        name={name}
                        first={first}
                        last={last}
                        // lname={lname}
                        username={username}
                        street={street}
                        city={city}
                        state={state}
                        zipcode={zipcode}
                        email={email}
                        phone={phone}
                    />  
        })
        
        return (       
            <section className="">
                <h1 style={styles.h1}>Profile</h1>
                <ul style={styles.list}>{contactsNew}</ul>
            </section>
        );
    }
}
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    h1: {
        margin: '.6em 0 1em 2em',
        fontFamily: 'Helvetica Neue',
        fontSize: '2em',
        color: 'rgba(3, 0, 39, 1)',
        textDecoration: 'none'
      }
}


export default Profile