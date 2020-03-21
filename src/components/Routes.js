import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import Newsfeed from '../pages/Newsfeed'
import Messages from '../pages/Messages'
import Watch from '../pages/Watch'
import Profile from '../pages/Profile'

class Routes extends Component {
    render() {
        return (
            <section>
                <Switch>
                    {/* This link is for the inital load. The root file. */}
                    <Route exact path='/' component={Newsfeed} />
                    {/* This is for the navigation link */}
                    <Route exact path='/Newsfeed' component={Newsfeed} />
                    <Route exact path='/Messages' component={Messages} />
                    <Route exact path='/Watch' component={Watch} />
                    <Route exact path='/Profile' component={Profile} />
                </Switch>
            </section>
        );
    }
}

export default Routes