import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from './components/Home'
// import Acard from './components/Acard'
import Card from './components/Card.js'
// import SideNav from './components/SideNav';  
import Header from './components/Header';
import Login from './components/Login';
import InfoDoc from './components/InfoDoc';
import WaitingMatching from './components/WaitingMatching';
// import Body from './components/Body';
import './cssFile/App.css'
import Map from './components/Map';


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
            {/* <Route path = "/" component = {Header} /> */}
            <Route exact path = "/" component = {Card}  />   
            <Route path = "/login" component = {Login} />
            <Route path = "/infoDoc" component = {InfoDoc}/>
            <Route path = "/map" component = {Map}/>
            <Route path = "/wait" component = {WaitingMatching}/>
        </BrowserRouter>
    );
  }
}

export default App;
