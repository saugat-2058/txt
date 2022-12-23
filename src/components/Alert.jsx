import React from 'react'

export default function Alert(props) {
    //there is no function to capatalize the first letter in the javascript so capatalizing the first word of the text making thee  funcation
    const captalize = (word)=>{
        const lower  = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captalize(props.alert.type)}</strong>:{props.alert.msg}
   
  </div>
  )
}
