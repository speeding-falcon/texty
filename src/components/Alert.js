import React, { useState } from 'react'

export default function Alert(props) {

const initCaps = (word)=>{
    const w = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}    
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-1`} role="alert">
        <strong>{props.alert.type==='danger'?'Warning':initCaps(props.alert.type)}:</strong> {props.alert.msg}
        
        </div>
    
  )
}
