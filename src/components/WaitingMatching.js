import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../cssFile/Login.css';

class WaitingMatching extends React.Component {
    render(){
        return(
            <div className = "set">
                waiting for matching

                <pre/>

                <Link to = '/login'><i class="fas fa-spinner"></i></Link>
                <pre/>
                <Link to = '/login'>
                    click to continus
                </Link>
                
            </div>
        );
    }
}

export default WaitingMatching;