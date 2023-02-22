import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useStateValue } from "../StateProvider";
// import useGoogleSearch from "../useGoogleSearch";
import response from "../response";
import  SearchIcon  from "@mui/icons-material/Search";
import  DescriptionIcon  from "@mui/icons-material/Description";
import  ImageIcon  from "@mui/icons-material/Image";
import  LocalOfferIcon  from "@mui/icons-material/LocalOffer";
import  RoomIcon  from "@mui/icons-material/Room";
import  MoreVertIcon  from "@mui/icons-material/MoreVert";

const Search = () => {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term)

  const data = response;

  console.log(data);

  return (
    <div className="search__page">
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
        <div className="search__header--body">
          <SearchBar hideButtons />
          <div className="search__header--optn">
            <div className="header__optn--left">
              <div className="header__optn">
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className="header__optn">
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className="header__optn">
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className="header__optn">
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className="header__optn">
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className="header__optn">
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className="header__optn--right"></div>
          </div>
        </div>
      </div>
      <div className="container search__container">
        <div className="row search__row">
          <div className="search__results"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
