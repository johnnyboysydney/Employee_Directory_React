import React from 'react';
import "../CSS/Footer.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <p className="linkStyle">
                <a href="#header">Employee Directory</a> <span>|</span> <a href="#search">Search</a> <span>|</span> <a href="https://github.com/johnnyboysydney/Employee_Directory_React" rel="noopener noreferrer" target="_blank">GitHub Repo</a>
            </p>
            <hr></hr>
            <div className="centered" id="copyright">
                &copy; {new Date().getFullYear()} <a href="https://github.com/johnnyboysydney/Employee_Directory_React/blob/master/LICENSE" rel="noopener noreferrer" target="_blank">Copyright</a> <span>|</span> All rights reserved <span>|</span> <a href="https://github.com/johnnyboysydney" rel="noopener noreferrer" target="_blank">John Merchan</a>
            </div>
        </div>
    )
}

export default Footer;