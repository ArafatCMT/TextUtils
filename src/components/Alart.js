import React from 'react'

function Alart(props) {
    const Capitalize = (word) =>{
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    props.alart && <div className={`alert alert-${props.alart.type}`} role="alert">
        <strong>{Capitalize(props.alart.type)}</strong> : {props.alart.msg}
    </div>
  )
};

export default Alart;
