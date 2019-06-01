import React from 'react';
import '../cssFile/Header.css';

class HeaderCardPage extends React.Component {
    render(){
        return (
        <div className = "App">
            <div className = "Header">     
                <div className = "HeaderButton">
                    {/* <a ><i class="fas fa-stream fa-1x"></i></a> */}
                </div>
                <div className = "AppName">
                    Services
                </div>
                <div className = "LogoHeader">
                    <a ><i class="fas fa-filter"></i></a>
                </div>
            </div>
            
        </div>
        )
    }
}

export default HeaderCardPage;