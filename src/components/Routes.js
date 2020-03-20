import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


// import Newsfeed from '..src/pages/Newsfeed'
// import Messages from '../src/pages/Messages'
import Watch from '../pages/Watch'
import Profile from '../pages/Profile'

class Routes extends Component {
    render() {
        return (
            
            <section>
                <Switch>

                  {/* <Route exact path='/' component={Newsfeed} /> */}
                  {/* <Route exact path='/Messages' component={Messages} /> */}
                  <Route exact path='/Watch' component={Watch} />
                  <Route exact path='/Profile' component={Profile} />

                </Switch>
            </section>
        
        );
    }
}

export default Routes