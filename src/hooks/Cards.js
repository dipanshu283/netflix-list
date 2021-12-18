import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <>
      <section>
        {data.map((val, index) => {
          return (
            <div key={index} className="card">
              <h2>{val.tittle}</h2>
              <p>{val.description}</p>
              <Link to={`/Cards/${val.tittle}`}> View More</Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Cards;
