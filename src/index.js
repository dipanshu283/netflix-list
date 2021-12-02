import react from "react";
import reactDom from "react-dom";
import "./index.css";

let msgStyle;

function greet() {

    // let time= new Date().getHours();
    let time = 18;
    console.log(time);

    let greetmsg;
    

    if (time<12 &&time>=4) {
        greetmsg = "Good Morning";
        msgStyle = {
            color : "green",
        }

    } 
    else if (time>12 && time<19){
        greetmsg = "Good Evening";
        msgStyle = {
            color : "orange",
        }
        
    }
    else {
        greetmsg = "Good Night";
        msgStyle = {
            color : "red",
        }
    }
    return greetmsg;
    
}

let msg = greet();


reactDom.render(<>
<div className="headingDiv">
 <h1  className="mainHeading">Hello Sir, <span className="spann" style = {msgStyle}> {msg} </span> </h1>
</div>

</>,document.getElementById('root'));