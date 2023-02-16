import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="row home__row">
          <h1>This is the home page</h1>

          <div className="home__header">
            <div className="home__headerLeft">
              <Link className="link" to="/about">About</Link>
              <Link className="link" to="/store">Store</Link>
              <Link className="link" to="/">Home</Link>
            </div>
            <div className="home__headerRight">
              <Link className="link" to="/gmail">Gmail</Link>
              <Link className="link" to="/Images">Images</Link>
              {/* Icon */}
              {/* Avatar */}
            </div>
          </div>

          <div className="home__body"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
