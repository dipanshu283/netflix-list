import React from "react";
import { useParams , Link,useLocation, useNavigate } from "react-router-dom";


function FullCard({data}) {
  const { tittle } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const pre=()=>{
  navigate(-1)
  }
  const next=()=>{
   navigate(+1);
  }
  return (
    <section className="full">
      <div className="container">
        {data.filter(val => val.tittle === tittle).map((val,index)=>(
            <div key = {index}className="fullcard">
            <h2>{val.tittle}</h2>
            {/* <p>{val.description}</p> */}
            <p>{val.explain}</p>
     
            <br></br>
            <br></br>
            <p> your current location is {location.pathname}</p>


            </div>
        ))
    }
      </div>
    </section>
  );
}

export default FullCard;
