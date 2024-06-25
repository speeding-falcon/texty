import logo from './logo.svg';
import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/about';
import { useState } from 'react';

let name ="carceramike"
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171819';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff0c6';
    }
  }
  return (
    <>
      <Navbar title="TEXTY" about="About" mode={mode} toggleMode = {toggleMode}/>
      <br/>
      <TextForm  heading="Enter Text Here" mode={mode} />
    </>
  );
}

export default App;
