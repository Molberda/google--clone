import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="row home__row">
          <div className="home__header">
            <div className="home__headerLeft">
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/store">
                Store
              </Link>
              <Link className="link" to="/search">
                Search
              </Link>
            </div>
            <div className="home__headerRight">
              <Link className="link" to="/gmail">
                Gmail
              </Link>
              <Link className="link" to="/Images">
                Images
              </Link>
              <AppsIcon />
              <Avatar />
            </div>
          </div>
          <div className="home__body">
            <img
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt=""
              className="home__logo"
            />
            <div className="home__input--container">
              {/* Search bar component*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
