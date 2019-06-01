import React, { Component } from 'react';
import Acard from './Acard';
import '../cssFile/Card.css'

class Card extends React.Component {
    render() {
        return(
            <div className = "klong">
                <Acard/>
                <Acard/>
                <Acard/>
                <Acard/>
                <Acard/>
            </div>
        );
    }
}

export default Card;