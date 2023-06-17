import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
  const handleClick = () => {
    console.log("Onclick");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    console.log("Onclick");
    let newText = text.toLowerCase();
    setText(newText);
  }  

  const clearText = () => {
    
    setText(" ");
    
  } 

  const handleChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  }

  const [text, setText] = useState("");

  return (
    <> 
    <div className='container my-3'>
      <h1>{props.heading}</h1>
        <div className="form-group">          
            <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleClick}>Convert to CAPS </button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lower Case </button>
        <button className='btn btn-primary mx-2' onClick={clearText}> Clear </button>
    </div>
    
    <div className='container my-3'>
      <h2>Text Metrics</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minute read</p>
    </div>

    <div className='container my-2'>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </> 
  )
}
