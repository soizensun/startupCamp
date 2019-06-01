import React, { Component } from 'react';
import Acard from './Acard';
import Acard1 from './Acard1';
import Acard2 from './Acard2';
import Acard3 from './Acard3';
import '../cssFile/Card.css'
import HeaderCardPage from './HeaderCardPage';
// import search from './search'

class Card extends React.Component {
    render() {
        return(
            <div className = "klong">
                <HeaderCardPage/>
                <Acard/>
                <Acard1/>
                <Acard2/>
                <Acard/>
                <Acard1/>
                <Acard3/>
            </div>
        );
    }
}

export default Card;