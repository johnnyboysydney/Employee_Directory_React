import React from 'react';
import "../CSS/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <hr></hr>
            <div className="centered">
                &copy; {new Date().getFullYear()} copyright <span>|</span> All rights reserved <span>|</span> <a href="https://github.com/johnnyboysydney" rel="noopener noreferrer" target="_blank">John Merchan</a>
            </div>
        </div>
    )
}

export default Footer;