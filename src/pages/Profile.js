import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Ads from '../components/Ads'
import Footer from '../components/Footer'
import ProfileListItem from '../components/ProfileListItem'

class Profile extends Component {

    state = {
        userArray: [],
        ads: [
            {
              adImg: require('../images/ads/freshApp1.jpg'),
              adTitle: 'Task Tracker'
            },
            {
              adImg: require('../images/ads/freshApp2.jpg'),
              adTitle: 'Wagui TW'
            },
            {
            adImg: require('../images/ads/freshApp3.jpg'),
            adTitle: 'Taco Town'
            }]
    }
           
// fetching data from AIP
    componentDidMount() {
        this.fetchRandomUser();
}
    fetchRandomUser() {

        // this.setState({
        //     userArray: []
        // })

        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(user => ({
                picture: `${user.thumbnail}`,
                //The left side is the key. The right side is for the value. The value is coming from the api object.
                first:`${user.name.first}`,
                last:`${user.name.last}`,
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

        let myAds = this.state.ads.map((element, i) => {
            return <Ads
              key={i}
              val={element} />
          })

        //Get the state
        const { userArray } = this.state
        
            let contactsNew =userArray.map(contact => {
                const  { picture, username, street, city, state, postcode, email, phone, name, first, last, login } = contact
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
            <section className="">
                <Header />
            <h1 style={styles.h1}>Profile</h1>
            <main style={styles.main}>
            <Nav />
            <ul style={styles.list}>{contactsNew}</ul>
              <aside style={styles.asideAd}>
              {myAds}
            </aside>
            </main>
            <Footer />
            </section>
           
        );
    }
}
export default Profile

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    list: {
        padding: '0 1em',
        width: '100%'
    },
    h1: {
        margin: '.6em 0 1em 2em',
        fontFamily: 'Helvetica Neue',
        fontSize: '2em',
        color: 'rgba(3, 0, 39, 1)',
        textDecoration: 'none'
      }
}

