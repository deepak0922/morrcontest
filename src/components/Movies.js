import React, { useState, useEffect } from "react";
import "./Homepage.css";
const Movies = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
        setUsers(await response.json());

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
    <div>
      <p className="title"> Popular Movies</p>
      {

        [users].map((curElem) => {

    return (
        <div>
      <section style={{ float: "left" }}>
        <img src={curElem.images['Poster Art'].url} alt="series" />
        <p>{curElem.title}</p>
      </section>
      </div>
        )

    })        
    }
    </div>
  )
}
export default Movies;
