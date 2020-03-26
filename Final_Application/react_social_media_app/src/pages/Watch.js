import React, { Component } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import YouTube from 'react-youtube';

class Watch extends Component {
    
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                loop: 1
            }
          };
        return (   
            <section className="">
                 <Header />
                <h1 style={styles.h1}>Watch</h1>
                <Nav />
                <YouTube
        videoId="8XEagDbPop4"
        opts={opts}
        onReady={this._onReady}
      />
                <YouTube
        videoId="Y2vS8dPMR2U"
        opts={opts}
        onReady={this._onReady}
      />
                <YouTube
        videoId="01vuhp5WgXM"
        opts={opts}
        onReady={this._onReady}
      />
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