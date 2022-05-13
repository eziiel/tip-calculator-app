
import React from "react"
const InputText = ({label,value,onChange}) => {

  return (
    <div>
      <label>
        <input 
        value={value}
        onChange ={onChange}
        type="text"
        />
          {label}
      </label>
    </div>
  )
}

export {
  InputText
}