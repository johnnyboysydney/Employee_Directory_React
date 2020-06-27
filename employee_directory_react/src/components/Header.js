import React, { Component } from 'react';
import "../CSS/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                    <h1 className="display-3">Employee Directory</h1>
                    <p className="content">Click on up-down arrow to sort Last Names A-Z or Z-A. Use the search box to narrow your results.</p>
            </div>
        )
    };    
}