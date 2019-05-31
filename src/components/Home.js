import React ,{ Component } from 'react';
import SideNav from './SideNav';
import Header from './Header';
import Body from './Body';

class Home extends React.Component{
    render(){
        return(
            <div>
                <SideNav/>
                <Header/>
                <Body/> 
            </div>
        );
    }
}

export default Home;