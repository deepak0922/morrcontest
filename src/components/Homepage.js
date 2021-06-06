import React from 'react';
import "./Homepage.css";
import image from "../images/image.png";
function Home () {

    return(
        <div>
            <p className="title"> Popular Titles</p>

            <section>
                <img src={image} alt="series" />
               <p className="series">SERIES</p>
               <p>Popular Series</p>
               <img src={image} alt="movie" />
               <p className="movie">MOVIES</p>
               <p>Popular Movies</p>
            </section>

        </div>
    )
}
export default Home;