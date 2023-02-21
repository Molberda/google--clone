import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import response from "../response";

const Search = () => {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term)

  const data = response;

  console.log(data);

  return (
    <div className="search">
      <div className="container search__container">
        <div className="row search__row">
          <div className="search__header">
            <Link className="search__home--link" to="/">
              <figure className="search__logo--wrapper">
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
                  alt=""
                  className="search__logo"
                />
              </figure>
            </Link>
          <SearchBar hideButtons />
          </div>

          <div className="search__results"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
