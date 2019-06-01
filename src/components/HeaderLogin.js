import React from 'react';
import '../cssFile/Header.css';
import { Link } from 'react-router-dom';

class HeaderLogin extends React.Component {
    render(){
        return (
        <div className = "App">
            <div className = "Header">     
                <div className = "HeaderButton">
                    <Link to = '/' ><i class="fas fa-chevron-left"></i></Link>
                    
                </div>
                <div className = "AppName">
                    Checkout
                </div>
                <div className = "LogoHeader">
                    {/* <a ><i class="fas fa-stream fa-1x"></i></a> */}
                </div>
            </div>
            
        </div>
        )
    }
}

export default HeaderLogin;