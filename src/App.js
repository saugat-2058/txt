
import './App.css';
import React,{useState} from 'react';

import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {


  // const obj = {title:"TextUtils",aboutText:"About TextUtils",change:7}
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

const showalert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
}
const home =()=>{
  document.title="TextUtils - Home"
}
  const toggleMode=()=>{
    // console.log('object')
    if(Mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="grey";
      showalert("dark mode has been enabled","success")
      setTimeout(() => {
        setAlert(null)
      }, 3000);
      document.title="TextUtils - DarkMode";
      
      //for blinking and changing titles we can write as 
      // setInterval(() => {
        
      //   document.title="TextUtils  Is amazing";
      // }, 2000);
      // setInterval(() => {
        
      //   document.title="Install app now";
      // }, 1500);
    }else{
      document.body.style.backgroundColor="white";
      setMode("light")
      showalert("light mode has been enabled","success")
      setTimeout(() => {
        setAlert(null)
      }, 3000);
      document.title="TextUtils - LightMode";
      
    }
    
  }
  // const AboutTitle =()=>{
  //   document.title="TextUtils - About";

  // }
  return (
  <>
  <Router>
{/* way to pass the number is inside the curly braces and string inside the inverted commmas */}
<Navbar title="TextUtils" home={home} aboutText="About TextUtils" mode={Mode} togglemode={toggleMode}  />
<Alert alert={alert}/>
<div className='container my-3'>
<Routes>
  {/* <Route exact path='/about' element={<About/>}/> */}
  <Route exact path='/' element={<Textform showalert={showalert} heading="Enter a text to analyze" mode={Mode}/>}/>
</Routes>
  </div>
{/* passing props as the objects */}
{/* <Navbar {...obj}/> */}
  </Router>
  </>
  
  );
}

export default App;
