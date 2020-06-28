import React, { Component } from 'react';
import "../CSS/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header" id="header">
                    <h1>Employee Directory</h1>
                    <hr></hr>
                    <p>Click on up-down arrow to sort Last Names A-Z or Z-A. Use the search box to narrow your results.</p>
            </div>
        )
    };    
}