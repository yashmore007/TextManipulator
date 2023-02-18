import React, { useState } from "react";

export default function Form(props) {
  const upFunc = (event) => {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  const Reset = (event) => {
     setText("");
  };
  const lowFunc = (event) => {
    event.preventDefault();
     let newText=text.toLowerCase();
     setText(newText);
  };
 
 
  const xMail = (event) => {
    event.preventDefault();
    let words=text.split(" ");
     for (let item of words){
       for ( let micro of item){
          if(micro==="@"){
            setArray(item);
          }
      }
    }
    for (let item of array){
       let splitArray=item.split("@");
       if(splitArray[1]=="gmail.com"){
         console.log("emial matched yash");
      }
    }
    
      
  };






 
  const [text, setText] = useState("");
  const [array,setArray]=useState([]);
  return (
    <>
       <form>
      <h1 className={`${props.PowerCg}`}>{props.heading}</h1>
      <div className="form-group ">
        <textarea
          className={`form-control ${props.TextBg} ${props.TextColor} `}
          onChange={onChange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="12"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary my-2" style={props.ButtonColor} onClick={upFunc}>
        Uppercase
      </button>
      <button disabled={text.length===0}  className="btn btn-primary my-2 mx-2" style={props.ButtonColor} onClick={lowFunc}>
        lowercase
      </button>
      <button disabled={text.length===0}  className="btn btn-primary my-2 mx-2" style={props.ButtonColor} onClick={xMail}>
        extractMail
      </button>
      <button disabled={text.length===0}  className="btn btn-primary my-2 mx-2" style={props.ButtonColor} onClick={Reset}>
        Reset
      </button>
    </form>
    <div className={`container ${props.PowerCg}`} >
      <h2 >your text summary</h2>
      <p >{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p >{0.008 *( text.split(" ").filter((element)=>{return element.length!=0}).length)} minutes required to read the above words</p>
      <h1 >Preview</h1>
      <p >{text.length>0?text:"Nothing to preview"}</p>
      <h3 >email extractor</h3>
      <p >{array} is a extracted mail from the text</p>
    </div>
    </>
 
  );
}
