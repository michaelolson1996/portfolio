import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import About from './about'
import Home from './home'
import Contact from './contact'
import Projects from './projects'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route path = '/projects' component = {Projects} />
        </Switch>
      </>
    );
  };
};

export default App;