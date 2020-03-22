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
            isLoading: false
        }))
        .then(parsedJSON => console.log(parsedJSON.results))
        .catch(error => console.log('parsing failed', error))
        
    }

    render() {
        
        const contacts = this.state.contacts.map((element, i) => {
            return <ProfileListItem
              key={i}
              val={element}
               />  
            
          }) 
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