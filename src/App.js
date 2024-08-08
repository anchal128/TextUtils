// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [alert,setAlert]=useState("null");
  const showAlert = (message,type) =>{
     setAlert({
      msg: message,
      type: type
     });
  }
  const toggleMode = ()=>{
    if(mode ==='light')
    {
       setMode('dark');
       document.body.style.backgroundColor = '#071f24';
       showAlert("dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const [mode,setMode]=useState('dark');
  return (
    <> <Navbar title="textutils" about="about textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-5">
    <TextForm title="Enter the text area below" mode={mode}/>
    {/* <About/> */}
    </div>
   
     </>
  )
}

export default App;
