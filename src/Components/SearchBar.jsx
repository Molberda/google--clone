import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


const SearchBar = ({ hideButtons = false }) => {
  const [term , dispatch] = useStateValue();
  
  const [input, setInput] = useState("");
  const history = useNavigate();

  function search(e) {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })

    // Do something with that input... come back and fix it
    history("/search");
  }

  return (
    <form className="search">
      <div className="search__input">
        <MicIcon className="search__input--micIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What are you looking for?"
        />
        <SearchIcon className="search__input--searchIcon" />
      </div>
      {!hideButtons ? (
        <div className="search__btns">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__btns search__btns--hidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
