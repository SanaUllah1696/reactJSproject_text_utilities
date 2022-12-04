import React,{useState} from 'react';

export default function (props){
    const [text, setText] = useState("");
const uppercase=(e)=>{
    setText(text.toUpperCase())
    
}
const lowerCase=(e)=>{
    setText(text.toLowerCase())
    
}
const clear=()=>{
    setText("")
    
}
// now you can hear you text 
const speaker = () => {

    let msg = new SpeechSynthesisUtterance();
    
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
//   download able function
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "html/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "yourFile.html";
    element.click();
}

  

let onChangeHandler=(e)=>{
    setText(e.target.value)
}

    return(
        <>
     

<div className="container my-3">
<h1>{props.heading}</h1>
<div className="mb-3">
  
  
  <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<booton className="btn btn-primary" onClick={uppercase} >Convert to upperCase </booton>
<booton className="btn btn-primary mx-2" onClick={lowerCase} >Convert to LowerCase </booton>
<booton className="btn btn-primary mx-2" onClick={clear} >Clear All </booton>

<button  onClick={speaker} className="btn btn-primary mx-2">Speaker</button>
<button className='btn btn-primary mx-2' onClick={downloadTxtFile}>Download</button>





</div>

<div className="container my-2">
    <h2>Your Test summary</h2>
    <p>Words = {text.split(" ").length} and Characters={text.length}</p>
    <p>Words = {0.008*text.split(" ").length} Minutes for Read</p>
    <h3>Preview text</h3>
    <p>{text}</p>

</div>
        </>
    );
}