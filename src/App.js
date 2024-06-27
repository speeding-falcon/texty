import logo from './logo.svg';
import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/Alert';

let name ="carceramike"
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
    const showAlert = (message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=>{
          setAlert(null);
        },1250)
    }
  document.body.style.backgroundColor = mode==='light'?'#fff0c6':'#171819';
  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171819';
      showAlert('dark mode is enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff0c6';
      showAlert('light mode is enabled','success');
    }
  }
  return (
    <>
      <Navbar title="TEXTY" about="About" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <br/>
      <TextForm  heading="Enter Text Here" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
