import React from 'react';
import "../CSS/Search.css";

const Search = (props) => {
    return (
        <div>
            Search
            <div>
                <input className="form-control" type="text" {...props} />
            </div>
        </div>
    )
};

export default Search;