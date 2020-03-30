import React, { Component } from 'react'
// import Header from '../components/Header'
import YouTube from 'react-youtube'
// import Nav from '../components/Nav'
// import Ads from '../components/Ads'
// import Footer from '../components/Footer'


class Watch extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '183',
      width: '300',
      playerVars: {
        autoplay: 0,
        loop: 1
      }
    };

    return (

      <div style={styles.allContainer}>
        {/* <Header /> */}
        <h1 style={styles.h1}>Watch</h1>
        <main style={styles.mainContainer}>

          <section style={styles.videoContainer}>

            <article style={styles.tubeVideo}>
              <YouTube
                videoId="8XEagDbPop4"
                opts={opts}
                onReady={this._onReady} />
            </article>

            <article style={styles.tubeVideo}>
              <YouTube
                videoId="Y2vS8dPMR2U"
                opts={opts}
                onReady={this._onReady} />
            </article>

            <article style={styles.tubeVideo}>
              <YouTube
                videoId="01vuhp5WgXM"
                opts={opts}
                onReady={this._onReady} />
            </article>

          </section>

        </main>

      </div>
    );

  }

}

export default Watch

const styles = {
  allContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainContainer: {
    display: 'flex',
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
  videoContainer: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    flexDirection: 'column',
  },
  tubeVideo: {
    margin: '0 0 2em 0'
  },
  asideAd: {
    margin: '0 1.8em 0 1em'
  },
}