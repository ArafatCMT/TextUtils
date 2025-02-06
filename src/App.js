import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alart from './components/Alart';
import { BrowserRouter as Router, Routes, Route } from "react-router";

import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark')
  const [modeText, setModeText] = useState('Enable LightMode')
  const [textColor, setTextColor] = useState('text-white')
  const [alart, setAlart] = useState(null);

  if(mode === 'dark'){
    document.body.style.backgroundColor = '#182C25';
  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      setTextColor('text-white')
      setModeText('Enable LightMode')
      document.body.style.backgroundColor = '#182C25';
      // console.log("light -> dark")
      ShowAlart("Drak mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing'
      // },2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // },1500);
    }
    else
    {
      setMode('light')
      setModeText('Enable darkMode')
      setTextColor('text-dark')
      document.body.style.backgroundColor = 'white';
      ShowAlart("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
      // console.log("dark -> light")
    }
  }

  const ShowAlart = (massage, type) =>{
    setAlart({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlart(null)
    }, 1500);
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" toggleMode={toggleMode} mode={mode} modeText={modeText} textColor={textColor}/>
      <div className="container">
      <Alart alart={alart}/>
      <Routes>
      <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} ShowAlart={ShowAlart}/>} />
      <Route path="/about" element={<About />} />       
      </Routes>
      </div>
      </Router>
        
    </>
  );
}

export default App;
