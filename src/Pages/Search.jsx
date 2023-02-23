import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
// import response from "../response";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Search = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term)

  // const data = response;

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
          <div className="search__header--optns">
            <div className="header__optn--left">
              <Link className="header__optn" to="/all">
                <SearchIcon />
                All
              </Link>
              <Link className="header__optn" to="/news">
                <DescriptionIcon />
                News
              </Link>
              <Link className="header__optn" to="/images">
                <ImageIcon />
                Images
              </Link>
              <Link className="header__optn" to="/shopping">
                <LocalOfferIcon />
                Shopping
              </Link>
              <Link className="header__optn" to="/maps">
                <RoomIcon />
                Maps
              </Link>
              <Link className="header__optn" to="/more">
                <MoreVertIcon />
                More
              </Link>
            </div>
            <div className="header__optn--right">
              <Link className="header__optn" to="/settings">
                Settings
              </Link>
              <Link className="header__optn" to="/tools">
                Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container search__container">
        <div className="row search__row">
          {term && (
            <div className="search__results">
              <p className="search__results--count">
                About {data?.searchInformation.formattedTotalResults} results (
                {data?.searchInformation.formattedSearchTime} seconds) for "
                {term}"
              </p>
              {data?.items.map((item) => (
                <div className="search__result--item">
                  <figure className="item__img--wrapper">
                    <a href={item.link}>
                      {item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src && (
                          <img
                            src={
                              item.pagemap?.cse_image?.length > 0 &&
                              item.pagemap?.cse_image[0]?.src
                            }
                            className="item__img"
                          />
                        )}
                    </a>
                  <a href={item.link} className="item__display--link">
                    {item.displayLink}
                  </a>
                  </figure>
                  <a href={item.link} className="item__title">
                    <h2>{item.title}</h2>
                  </a>
                  <p className="item__snippet">{item.snippet}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
