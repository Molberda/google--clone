import React from 'react';
import { Link } from 'react-router-dom';


const Search = () => {
    return (
        <div className='search'>
            <h1>This is the search page</h1>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Search;
