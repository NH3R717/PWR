import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

class Watch extends Component {
    render() {
        return (   
            <section className="">
                 <Header />
                <h1 style={styles.h1}>Watch</h1>
                <Nav />
            </section>
        );
    }
}

export default Watch

const styles = {
    h1: {
        margin: '.6em 0 .82em 2em',
        fontFamily: 'Helvetica Neue',
        fontSize: '2em',
        color: 'rgba(3, 0, 39, 1)',
        textDecoration: 'none'
      }
    }