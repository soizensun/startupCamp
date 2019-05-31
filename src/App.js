import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './components/Home'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Body from './components/Body';
import './cssFile/App.css'



const newRoute = () => {
  return(
    <div>
      <p>asdfs</p>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
        // <BrowserRouter>
        //   <Route path = "/home" Component = {Home} />        
        // </BrowserRouter>
        <div>
          {/* <Home/> */}
          <SideNav/>
          <Header/>
          <Body/> 
        </div>
    );
  }
}

export default App;
