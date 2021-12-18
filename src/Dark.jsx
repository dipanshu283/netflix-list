import React, { useState } from "react";
import "./dark.css";
import Textarea from "./Textarea";
import Form2 from "../Form2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes,
} from "react-router-dom";

function Dark(props) {
  const [buttontext, settext] = useState("Dark Mode");

  const [darkkbg, setdarkbg] = useState({
    backgroundColor: "",
  });
  const [darkktext, setdarktext] = useState({
    color: "",
  });

  const [mode, setmode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setdarkbg({
        backgroundColor: "black",
      });
      setdarktext({
        color: "white",
      });
      console.log("white");
      setmode("dark");
      settext("Dark Mode");
    } else {
      setdarkbg({
        backgroundColor: "",
      });
      setdarktext({
        color: "",
      });
      setmode("light");
      settext("Dark Mode");
    }
  };

  return (
    <>
      <div className="wrapper" style={darkkbg}>
        <nav
          className="nav - navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <h3>
            <span className="c">C</span>
            <span className="o1">o</span>
            <span className="o2">o</span>
            <span className="l">l</span>
            <span className="o3">o</span>
            <span className="r">r</span>
            <span className="s">s</span>
          </h3>
          <div>
            <ul className="nav">
              <li>Home</li>
              <li>About Us</li>
              <li>portfolio</li>
              <li> <Link  to='../Form2'> </Link>  </li>

              <div class="form-check form-switch dark-mode-button">
                <label
                  class="form-check-label"
                  style={darkktext}
                  for="flexSwitchCheckDefault"
                >
                  {buttontext}
                </label>
                <input
                  onClick={toggle}
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </ul>
          </div>
        </nav>

        <div className=" container my-5">
          <h1 className="heading" style={darkktext}>
            Trending color palettes
          </h1>
          <p style={darkktext}>Get inspired by thousands of beautiful color </p>
          <p style={darkktext}>schemes an amke something cool!! </p>

          {/* <Form2></Form2> */}
        </div>


        <Router>

        
        <Routes>
          <Route path="../Form2">
            element = {Form2}
          </Route>
       
          <Route path="/">
        
            {/* element = {<Textarea title="TextUtils" mode={mode} darkktext={darkktext} /> } */}
          </Route>
        </Routes>




        </Router>
        <footer>
          <p>copyright @ 2021</p>
        </footer>
      </div>
    </>
  );
}

export default Dark;
