import React, { useState } from "react";

export default function Textform(props) {
  //convert to the uppescase function
  const handleUPclick = () => {
    // console.log("Handle up click was  clicked");
    let result = text.toUpperCase();
    setText(result);
    props.showalert("Converted to Uppercase","success")
  };
  //convert to the lowercase function
  const handleLOclick = () => {
    // console.log("Handle up click was  clicked");
    let result = text.toLowerCase();
    setText(result);
    props.showalert("Converted to Lowercase","success")
  };
  //Removing tghe extra space function
  const handleSPclick = () => {
    // console.log("Handle up click was  clicked");
    let result = text.split(" ");
    let final = "";
    for (var i = 0; i < result.length; i++) {
      if (result[i] !== "") {
        final += " " + result[i];
      }
    }
    setText(final);
    props.showalert("Extra Space Removed","success")
  };
  //clear text
  const handleCLRclick = () => {
    setText("");
    props.showalert("Text Cleared","success")
  };
  //copy  text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text Copied to clipboard","success")
  };

  //counting the number of words in the tect function
  const counts = () => {
    var count = 0;
    var split = text.split(" ");
    for (var i = 0; i < split.length; i++) {
      if (split[i] !== "") {
        count++;
      }
    }
    return count;
  };
  const handleONchange = (event) => {
    // console.log("Handle On change");
    setText(event.target.value);
  };
   //decrease the font size
  const handleDECfont = (event) => {
    // console.log("Handle On change");
    mysize(size-1)
    myStyle({
      fontSize:`${size}px`,
      fontWeight:""
    })
  };
  //increase the font size
  const handleINCfont = (event) => {
    // console.log("Handle On change");
    mysize(size+1)
    myStyle({
      fontSize:`${size}px`,
      fontWeight:""
    })
  };
  //make text bolder
  const handleBoldfont = (event) => {
    if(styles.fontWeight===""){
      console.log("Handle On change");

      myStyle({
        fontSize:size+"px",
        fontWeight:"bolder"
        
      })
      setbold("Make text normal")
    }else{
      myStyle({
        fontSize:size+"px",
        fontWeight:""
        
      })
      setbold("Make text bolder")
    }
  };
  const[size,mysize]=useState(16)
  const[bold,setbold]=useState('Make text Bolder')
  const [styles, myStyle] = useState({
  fontSize: {size}+"px",
  fontWeight:''
  });
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <h5 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h5>
          <textarea  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white',styles}} 
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            onChange={handleONchange}
            value={text}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleUPclick}>
          Convert To UpperCase
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleLOclick}>
          Convert To LowerCase
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleSPclick}>
          Remove Extra Space
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleCopy}>
          CopyText
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleDECfont}>
          Decrease Font size
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleINCfont}>
          Increase Font size
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleBoldfont}>
          {bold}
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2`} onClick={handleCLRclick}>
          ClearText
        </button>
        {/* <button className="btn btn-primary ml-2" onClick={handleUPclick}>Convert To UpperCase</button> */}
      </div>
      <div className="container my-3">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>Your Text Summmary</h1>
        <p style={{color:props.mode==='light'?'black':'white'}}>
          {counts()} words and {text.length} characters
        </p>
        <p style={{color:props.mode==='light'?'black':'white'}}>{0.08 * counts()} minutes to read</p>
        <h3 style={{color:props.mode==='light'?'black':'white'}}>Preview</h3>
        <p style={{color:props.mode==='light'?'black':'white'}}>{(text.length===0)?`Enter Something to preview here`:text}</p>
      </div>
    </>
  );
}
