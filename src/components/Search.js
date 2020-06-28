import React from 'react';
import "../CSS/Search.css";

function Search({ handleSearchChange }) {
    return (
        <div className="searchBox" id="search">
            <form className="form-inline">
                <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={event => handleSearchChange(event)}
                />
            </form>
        </div>
    );
}

export default Search;