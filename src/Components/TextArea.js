import React, { useState } from 'react'


function TextArea(props) {
    
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        document.title='TextUtils - Uppercase';
    }
    
    const handleLowclick =()=>{
        let newtext = text.toLowerCase();
        setText(newtext); 
        document.title='TextUtils - Lowercase';
    }
    
    const handleClearClick =()=>{
        let newtext='';
        setText(newtext);
        document.title='TextUtils - Cleared';
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here");
    // const [modee , setModee] = useState('dark');
    return (
<>
<div style={{color: props.mode==='light'?'black':'white'}}>

        <div className="container my-3" > 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
 
        </div>
        
        <div className="container my-3" >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
</div>
        </>
    )
}

export default TextArea