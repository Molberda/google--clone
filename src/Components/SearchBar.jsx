import React from "react";
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'

const SearchBar = () => {
  return (
    <div className="search__input">
      <MicIcon className="search__input--micIcon" />
      <input />
      <SearchIcon className="search__input--searchIcon" />
    </div>
  );
};

export default SearchBar;
