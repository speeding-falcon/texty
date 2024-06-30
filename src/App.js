import logo from './logo.svg';
import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/Alert';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

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
  document.body.style.backgroundColor = mode==='light'?'#fcfbed':'#171819';
  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171819';
      showAlert('dark mode is enabled','success');
      document.title = 'Texty - Dark Mode';
      setInterval(()=>{document.title='Install TEXTY Now'},2000);
      setInterval(()=>{document.title='TEXTY is Amazing'},1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff0c6';
      showAlert('light mode is enabled','success');
      document.title = 'Texty - Home';
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="TEXTY" about="About" mode={mode} toggleMode = {toggleMode}/><Alert alert={alert}/><TextForm  heading="Enter Text Here" mode={mode} showAlert={showAlert}/></>
    },
    {
      path: "/about",
      element: <><Navbar title="TEXTY" about="About" mode={mode} toggleMode = {toggleMode}/><Alert alert={alert}/><About/></>
    }
  ])
  return (
    <>
      
      
      
      <RouterProvider router={router}/>
		      
         
	      
      
    </>
  );
}

export default App;
