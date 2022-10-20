import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NewsArea from './components/NewsArea';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <NewsArea/>  
      </div>
    );
  }
}
