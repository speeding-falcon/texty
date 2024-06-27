import React , {useState} from 'react'


export default function TextForm(props) {
    let emails;
    let phone;
    const [text, setText] = useState('');
    const Handlevagera = () => {
        console.log("handle was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to UpperCase',  'info');
    }
    const HandleL = () => {
      console.log("handle was clicked "+ text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Text converted to LowerCase',  'info');
  }
    const HandleOnChange = (event) => {
        console.log("handle changed");
        setText(event.target.value);
    }

    const HandleCopy = () => {
      console.log("handle copied");
      navigator.clipboard.writeText(text);
      props.showAlert('Text Copied to Clipboard',  'info');
  }

  const extraSace = () => {
    console.log("spaces removed");
    let txtx = text.split(/[ ]+/);
    setText(txtx.join(" "));
    props.showAlert('Spaces are removed',  'danger');

}
  
    const clearText = () => {
      console.log("text cleared");
      document.getElementById('emg').innerHTML = "";
      document.getElementById('ema').innerHTML = "";
      document.getElementById('pha').innerHTML ='';
      document.getElementById('phn').innerHTML ='';
      setText("");
      props.showAlert('text is cleared',  'danger');
 

  }
  var Filter = require('bad-words');
  var filter = new Filter();
  filter.addWords('chutiya', 'gandu', 'bhosdike', 'chut', 'bhosda', 'bsdk', 'madarchod', 'bhenchod', 'chod','bhadwa','maa ki','maa ka','bkl','bc','mc','bhen ka','loda','tmkc','wota','tevria','ponde','kudi');
  const badfilter =()=> {
    
    if(text){
      var cleanText = filter.clean(text);
      cleanText = cleanText.replace(/\*/g,"");
      setText(cleanText);
      props.showAlert('Bad words removed',  'success');
    }
    else{
      window.alert('no input');
    }
  };
  const findEmail = ()=>{
      emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
      if(emails){
      document.getElementById('emg').innerHTML = "Emails:";
      document.getElementById('ema').innerHTML = emails.toString();
      props.showAlert(`Emails have been found ${emails} scroll down to see `,  'success');
      }
      else{
        props.showAlert('No emails found',  'danger');
      }
      console.log(emails);
      
  }

  const findPhone = ()=>{
    phone = text.match(/([0-9]{10})/gi);
    if(phone){
    document.getElementById('pha').innerHTML = "Phone Numbers:";
    document.getElementById('phn').innerHTML = phone.toString();
    props.showAlert(`Phone numbers have been found ${phone} scroll down to see `,  'success');
    }
    else{
      props.showAlert('No Phone numbers found',  'danger');
      
    }
    console.log(emails);
    
    
}
  return (

    
    <>
      
    
    <div className="mb-3 container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}  </h1>
    
    <textarea className="form-control" id="mytext" rows="5" value={text} onChange={HandleOnChange} style={{backgroundColor : props.mode==='dark'?'#212529':'#fffb87' , color: props.mode==='dark'?'white':'#212529' }} ></textarea>
    <button className="btn btn-info my-3 mx-2"  onClick={Handlevagera}>Convert to Uppercase</button> 
    <button className="btn btn-info my-3 mx-2"  onClick={HandleL}>Convert to Lowercase</button>
    <button className="btn btn-info my-3 mx-2"  onClick={extraSace}>Remove Extra Space</button>
    <button className="btn btn-danger my-3 mx-2"  onClick={badfilter}>Remove Abusive Words</button>
    <button className="btn btn-warning my-3 mx-2"  onClick={findEmail}>Find Emails</button>
    <button className="btn btn-warning my-3 mx-2"  onClick={findPhone}>Find Phone Numbers</button>
    <button className="btn btn-success my-3 mx-2"  onClick={HandleCopy}>Copy</button>
    <button className="btn btn-danger my-3 mx-2"  onClick={clearText}>Clear Text</button>
  </div>
  <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>
      Your text summary:
    </h2>
    <p>
      {text.split(" ").length-1} words {text.length} characters {text.split(".").length-1} sentences <br/> {text.split(" ").length * 0.008 * 60} Seconds to read
      </p>
    
    <h3>{text?'Preview:':''}</h3>
    <p>
      {text}
    </p>
    
    <div >
      <h3 id="emg"> </h3>
      <p id="ema"></p>
    </div>
    <div >
      <h3 id="pha"> </h3>
      <p id="phn"></p>
    </div>
    
  </div>
</>
  )
}
