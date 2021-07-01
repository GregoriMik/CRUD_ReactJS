import React, { Component } from 'react';
import Books from './containers/Books.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
class App extends Component {


  render(){
    return(
    <div className="App">
      <Books />
    </div>);
  }
}

export default App;
