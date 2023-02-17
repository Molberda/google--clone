import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

const SearchBar = () => {

    const [input, setInput] = useState('');

    function search(e) {
        e.preventDefault()
    } 

    return (
    <div className="search">
      <div className="search__input">
        <MicIcon className="search__input--micIcon" />
        <input placeholder="What are you looking for?" />
        <SearchIcon className="search__input--searchIcon" />
      </div>

      <div className="search__btns">
        <Button onClick={search} variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default SearchBar;
