import React, { useEffect, useState } from "react";
import "./covid.css";

function CovidState(props) {


    const [hdata , sethdata ] = useState([]);
 


    const fetchData= async ()=>{

    const url = "https://data.covid19india.org/data.json";
    const response = await fetch(url);
    let data = await response.json();
    data = data.statewise;
    console.log(data);
    sethdata(data);

    }

    useEffect(()=>{

        fetchData();
        // alert("hello");

    },[])



  return (
    <div className="container">
      <h1 className="heading">
        <span className="thick-heading IN">IN</span>
        <span className=" thick-heading D">D</span>
        <span className=" thick-heading IA">IA </span>
        COVID-19 Dashboard
      </h1>


<div className="table-responsive tablee">
      <table className="table table-hover ">

      <thead className="table-dark">
        <tr className="dark">
          <th>State</th>
          <th>Confirm</th>
          <th>Recovered</th>
          <th>Deaths</th>
          <th>Active</th>
          <th>Update</th>
        </tr>
        </thead>

        <tbody className="table-body">
      
       
       {hdata.map((value, index)=>{
           console.log(value.state);
           return(
        <tr key={index}>
            <td>{value.state}</td>
            <td>{value.confirmed}</td>
            <td>{value.recovered}</td>
            <td>{value.deaths}</td>
            <td>{value.active}</td>
            <td>{value.lastupdatedtime}</td>
          </tr>
           );
       })}
         
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default CovidState;
