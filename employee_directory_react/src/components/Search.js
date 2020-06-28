import React from 'react';
import "../CSS/Search.css";

function Search({ handleInputChange }) {
    return (
        <div className="searchBox">
            <form className="form-inline">
                <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={event => handleInputChange(event)}
                />
            </form>
        </div>
    );
}

export default Search;