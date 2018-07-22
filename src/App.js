import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "semantic-ui-css/semantic.min.css";
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router';
// import SourceList from './modules/SourceList';
import NewsList from './modules/news/NewsList';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NewsList/>
      </div>
    );
  }
}

export default App;
