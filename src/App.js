import logo from './logo.svg';
import './App2.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';

let name ="carceramike"
function App() {
  return (
    <>
      <Navbar title="TEXTY"/>
      <TextForm  heading="Enter Texts Here"/>
    </>
  );
}

export default App;
