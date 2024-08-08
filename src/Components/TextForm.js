import React, {useState} from 'react'

export default function TextForm(props) {
  

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const handleUpclick = ()=>
  {
     
      const newText=text.toUpperCase();
      setText(newText);
      showAlert("Converted to upperCase","success");
  }
  const handleLoclick = ()=>
    {
        console.log("text is converted to the uppercase","success");
        const newText=text.toLowerCase();
        setText(newText);
        showAlert("Converted to lowerCase");
    }

  const handleOnchange = (event)=>
    {
        console.log("on change has been handled");
        
        setText(event.target.value);

    }
    const [text,setText]=useState("enter text here");
   
  return (
    <> 
    <div style={{ color : props.mode === 'light'?'black':'white' }}>
    <h1>{props.title}</h1>
  <div className="mb-3" >
   
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnchange} value={text} rows="8" style={{backgroundColor : props.mode ==='dark'?'grey':'white'}}></textarea>
    
  </div>
  <button className="btn btn-primary mx-3" onClick={handleUpclick}>Covert to uppercase</button>
  <button className="btn btn-primary" onClick={handleLoclick}>Covert to lowercase</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
  <div className="container my-3" style={{ color : props.mode === 'light'?'black':'white' }}>
       <h1>This is your text </h1>
       <p> {text.split(" ").length} words and {text.length} characters </p>
       <h1>Preview</h1>
       <p>{text}</p>
  </div>
  </>
  
  )
}
