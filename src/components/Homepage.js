import React from "react";
import "./Homepage.css";
import image from "../images/image.png";
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <p className="title"> Popular Titles</p>

      <Link to="/movies"><section style={{ float: "left" }}>
        <img src={image} alt="series" />
        <p className="series">SERIES</p>
        <p>Popular Series</p>
      </section>
      </Link>
      <Link to ="/series">
      <section>
        <img src={image} alt="movie" />
        <p className="movie">MOVIES</p>
        <p>Popular Movies</p>
      </section>
      </Link>
    </div>
  );
}
export default Home;
