import React from "react";
import { Link, useLocation ,useNavigate } from "react-router-dom";
import Cards from "./Cards"; 

function Hero({data}) {
  const location = useLocation();
  const history = useNavigate();
  console.log(history);
  return (

    <section className="hero">
      <div className="container">
        <Cards data = {data}/>
        <p>your current location is <strong>{location.pathname}</strong></p>
        
      </div>
    </section>
  );
}

export default Hero;
