import React from 'react';
import "../CSS/Search.css";

const Search = (props) => {
    return (
        <div className="searchBox">
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