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
        .then(parsedJSON => parsedJSON.results.map(user => (
            {
                picture: `${user.thumbnail}`,
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
        const {contacts} = this.state
        //Use destructuring here
        //Declare variables
        // const {username, fname, lname, street, city, state, zipcode, picture, email, phone} = contactsNew;
        // This needs to change slightly.
        // const contactsNew = this.state.contacts.map((element, i) => {
        //     return <ProfileListItem
        //                 key={i}
        //                 val={element}
        //                 name={name}
        //                 email={email}
        //                 phone={phone}
        //             />  
        return (       
            <section className="">
                <h1>Profile</h1>
                <ul style={styles.list}>{contacts}</ul>
            </section>
        );
    }
}
const styles = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}


export default Profile