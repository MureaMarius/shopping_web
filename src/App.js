import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import LogIn from "./logIn/LogIn";
import Home from './home/Home';

class App extends React.Component {

  render() {
      return (
          <div className="home">
            <Router>
              <Switch>

                <Route
                  exact
                  path="/"
                  render={() => <LogIn/>}
                />

                <Route
                  exact
                  path="/home"
                  render={() => <Home/>}
                />  

              </Switch>
            </Router>
          </div>
      )
  };
}

export default App