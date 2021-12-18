import React from 'react';
import { useState } from 'react';

function Textarea(p) {     
 
let whitetext = {

    color : "whitesmoke"
}
let darkbg = {
    
    backgroundColor : "black"
}
    const [text , updateText] = useState('');
 
    const onchange=(e)=>{
        updateText(e.target.value);
        console.log(text);
    }

function lowerCase() {

    let newtext = text.toLowerCase();
    updateText(newtext);
    
    
}
function uperCase() {
    
    let newtext = text.toUpperCase();
    updateText(newtext);
}
function removeAll() {

    let newtext = "";
    updateText(newtext);
    
}
function copyText() {

    
}
function removeExtraSpace() {
  
}

    return (
        <>

        <div className='container'>

  <div className="mb-3 container">
  <label style={p.darkktext} htmlFor="exampleFormControlTextarea1" className="form-label"> Enter text below to convert and analyse..</label>
  <textarea  className="form-control ttextarea" style={p.mode==='dark'?{backgroundColor:"grey", color:"white"}:{backgroundColor:"white"}}  value={text} onChange={onchange} rows="8" placeholder='type here ......'></textarea>
  </div>
  <div>
  <button type="button"  onClick={lowerCase} className="btn btn-primary mx-2 my-4">LowerCase</button>
  <button type="button" onClick={uperCase} className="btn btn-primary mx-2 my-4">UpperCase</button>
  <button type="button" onClick={copyText} className="btn btn-primary mx-2 my-4">CopyText</button>
  <button type="button" onClick={removeAll} className="btn btn-primary mx-2 my-4">RemoveAll</button>
  <button type="button" onClick={removeExtraSpace} className="btn btn-primary mx-2 my-4">RemoveExtraSpace</button>
</div>

 <div className='container '>

 <h2 style={p.darkktext}>Your Text Summary</h2>

 <p style= {p.darkktext}  >1. You entered {text.length} characters  & {text.split(" ").length-1} words  </p>


 </div>
</div>


            
        </>
    );
}

export default Textarea;
