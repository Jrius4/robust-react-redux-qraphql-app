import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Articles from '../articles/Articles';
import News from '../news/News';
import Navigation from './navigation/Navigation';


class Layout extends Component {
    

    render() {
        return (
            <>
                <Router>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" component={Articles}/>
                            <Route exact path="/articles" component={Articles}/>
                            <Route exact path="/news" component={News}/>
                        </Switch>
                </Router>

                           
            </>
        )
    }
}
export default Layout;
