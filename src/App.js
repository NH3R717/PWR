import React, { Component } from 'react';
                                                  // Why styles at the end?
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes'; import Nav from './components/Nav'
import Header from './components/Header'
import Ads from './components/Ads'
import Footer from './components/Footer'
import { purple, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[900],
            contrastText: '#000',
        },
        secondary: {
            light: purple[300],
            main: purple[500],
            dark: purple[900],
            contrastText: '#fff',
        },
    },
});

/* Coolers.co color profile – https://coolors.co/151e3f-030027-336699-faf471-db2b39

rgba(21, 30, 63, 1),  – Yankees Blue
rgba(3, 0, 39, 1), – Rich Black (FOGRA29)
rgba(51, 102, 153, 1); – Lapis Lazuli
rgba(250, 244, 113, 1); – Sunny
rgba(219, 43, 57, 1); – Rusty Red */

class App extends Component {
    state = {
        userArray: [],
        ads: [
            {
                adImg: require('./images/ads/freshApp1.jpg'),
                adTitle: 'Task Tracker'
            },
            {
                adImg: require('./images/ads/freshApp2.jpg'),
                adTitle: 'Wagui TW'
            },
            {
                adImg: require('./images/ads/freshApp3.jpg'),
                adTitle: 'Taco Town'
            }]
    }

    render() {

        let myAds = this.state.ads.map((element, i) => {
            return <Ads
                key={i}
                val={element} />
        })
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Header />
                        <main style={styles.mainContainer}>
                            <Nav />

                            <Routes />

                            <aside style={styles.asideAd}>
                                {myAds}
                            </aside>
                        </main>
                        <Footer />
                    </div>
                </MuiThemeProvider>
            </Router >
        );
    }
}

export default App


const styles = {
    allContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    mainContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    h1: {
        margin: '.6em 0 .82em 2em',
        fontFamily: 'Helvetica Neue',
        fontSize: '2em',
        color: 'rgba(3, 0, 39, 1)',
        textDecoration: 'none'
    },
    asideAd: {
        margin: '0 1.8em 0 1em'
    },
}