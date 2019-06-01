import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './components/Home'
// import Acard from './components/Acard'
import Card from './components/Card'
// import SideNav from './components/SideNav';  
import Header from './components/Header';
// import Body from './components/Body';
import './cssFile/App.css'


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>  
            <Route path = "/" component = {Header} />
            <Route path = "/" component = {Card} exact/>   
          
            {/* <Route path = "/" component = {Home} exact />  */}
          </div>
        </BrowserRouter>
        // <div>
        //   {/* <Home/> */}
        //   <SideNav/>
        //   <Header/>
        //   <Body/> 
        // </div>
    );
  }
}

export default App;
