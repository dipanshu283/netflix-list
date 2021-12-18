import react from "react";
import reactDom from "react-dom";
// import CovidState from "./covid/covidState";
import Appp from "./hooks/Appp"
// import "./index.css";
// import Sdata from "./Sdata";
// import Card from "./Card";
// import { Button } from "react-button-group";
// import Comp1 from "./usecontext/Comp1";


// function ncard(val) {
//   return (
//     <Card key={val.key} img_scr={val.img_scr} name={val.name} link={val.link} />
//   );
// }

reactDom.render(
  <>
    
    {/* <div className="wrapper-dark">
      <h1 className="list_heading">List of My fav. show on Netflix</h1>
      {Sdata.map(ncard)};
    </div> */}
    {/* <CovidState/> */}
  
  {/* <Hero/> */}
  <Appp/>

    
  </>,
  document.getElementById("root")
);
