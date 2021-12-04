import react from "react";
import reactDom from "react-dom";
import "./index.css";
import Sdata from "./Sdata";
import Card from "./Card";

function ncard (val){
  return(
    <Card
    key = {val.key}
    img_scr={val.img_scr}
    name={val.name}
    link={val.link}
  />
  )
} 

reactDom.render(
  <>
    <h1 className="list_heading">List of My fav. show on Netflix</h1>
  
    {Sdata.map(ncard)};
  </>,
  document.getElementById("root")
);
