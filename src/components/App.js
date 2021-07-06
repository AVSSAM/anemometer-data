import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Readings from '../pages/readings'

class App extends Component {

    state = {}
  
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path="/" component={Readings}></Route>
                    
                </Switch>
            </Router>
         );
    }

}
 
export default App; 