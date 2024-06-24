import React , {useState} from 'react'


export default function TextForm(props) {
    let emails;
    let phone;
    const [text, setText] = useState('');
    const Handlevagera = () => {
        console.log("handle was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleL = () => {
      console.log("handle was clicked "+ text);
      let newText = text.toLowerCase();
      setText(newText);
  }
    const HandleOnChange = (event) => {
        console.log("handle changed");
        setText(event.target.value);
    }
  
    const clearText = () => {
      console.log("text cleared");
      document.getElementById('emg').innerHTML = "";
      document.getElementById('ema').innerHTML = "";
      setText("");
  }

  const findEmail = ()=>{
      emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
      if(emails){
      document.getElementById('emg').innerHTML = "Emails:";
      document.getElementById('ema').innerHTML = emails.toString();
      }
      else{
        document.getElementById('emg').innerHTML = "No Emails found";
      }
      console.log(emails);
      
  }

  const findPhone = ()=>{
    phone = text.match(/([0-9]{10})/gi);
    if(phone){
    document.getElementById('pha').innerHTML = "Phone Numbers:";
    document.getElementById('phn').innerHTML = phone.toString();
    }
    else{
      document.getElementById('emg').innerHTML = "No phone numbers found";
    }
    console.log(emails);
    
}
  return (

    
    <>
      
    
    <div className="mb-3 container">
    <h1>{props.heading}  </h1>
    
    <textarea className="form-control" id="mytext" rows="5" value={text} onChange={HandleOnChange} ></textarea>
    <button className="btn btn-info my-3 mx-2"  onClick={Handlevagera}>Convert to Uppercase</button> 
    <button className="btn btn-info my-3 mx-2"  onClick={HandleL}>Convert to Lowercase</button>
    <button className="btn btn-warning my-3 mx-2"  onClick={findEmail}>Find Emails</button>
    <button className="btn btn-warning my-3 mx-2"  onClick={findPhone}>Find Phone Numbers</button>
    <button className="btn btn-danger my-3 mx-2"  onClick={clearText}>Clear Text</button>
  </div>
  <div className='container'>
    <h2>
      Your text summary:
    </h2>
    <p>
      {text.split(" ").length-1} words {text.length} characters {text.split(".").length-1} sentences {text.split(" ").length * 0.008 * 60} Seconds to read

    </p>
    <br/>
    <div >
      <h3 id="emg"> </h3>
      <p id="ema"></p>
    </div>
    <div >
      <h3 id="pha"> </h3>
      <p id="phn"></p>
    </div>
    <h3>Preview:</h3>
    <p>
      {text}
    </p>
  </div>
</>
  )
}
