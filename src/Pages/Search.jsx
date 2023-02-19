import React from 'react';
import './Search.css'
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';


const Search = () => {
    return (
        <div className='search'>
            <h1>This is the search page</h1>
            <Link to='/'>Home</Link>
            <SearchBar hideButtons/>                                                                                                                                                                                 
        </div>
    );
}

export default Search;
