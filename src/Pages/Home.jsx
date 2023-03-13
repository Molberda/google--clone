import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import SearchBar from "../Components/SearchBar";

const Home = () => {

  function notImplemented(){
    return alert('this feature isnt implemented yet')
  }

  return (
    <section id="home">
      <div className="container home__container">
        <div className="row home__row">
          <div className="home__header">
            <div className="home__headerLeft">
              <Link onClick={notImplemented} className="link" to="/">
                About
              </Link>
              <Link onClick={notImplemented} className="link" to="/">
                Store
              </Link>
              <Link onClick={notImplemented} className="link" to="/">
                Search
              </Link>
            </div>
            <div className="home__headerRight">
              <Link onClick={notImplemented} className="link" to="/">
                Gmail
              </Link>
              <Link onClick={notImplemented} className="link" to="/">
                Images
              </Link>
              <AppsIcon onClick={notImplemented} />
              <Avatar onClick={notImplemented} />
            </div>
          </div>
          <div className="home__body">
            <img
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt=""
              className="home__logo"
            />
            <div className="home__input--container">
              <SearchBar/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
