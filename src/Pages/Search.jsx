import React from 'react';
import './Search.css'
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import { useStateValue } from '../StateProvider';


const Search = () => {
    const [{ term }, dispatch] = useStateValue()

    return (
        <div className='search'>
            <div className="search__header">
                <h1>{term}</h1>
            </div>

            <div className="search__results">


            </div>
            <Link to='/'>Home</Link>
            <SearchBar hideButtons/>                                                                                                                                                                                 
        </div>
    );
}

export default Search;
