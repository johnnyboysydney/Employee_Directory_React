import React from "react";
import Search from "./Search.js";
import "../CSS/Search.css";

function Nav({ handleSearchChange }) {
    return (
        <nav>
            <div>
                <Search handleSearchChange = {handleSearchChange} />
            </div>
        </nav>
        );
    }

export default Nav;