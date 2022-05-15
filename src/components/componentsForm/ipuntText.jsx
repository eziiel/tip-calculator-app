
import React from "react"
import { Img, Input, Label } from "./styledForm"


const InputText = ({label,value,onChange,src,alt}) => {

  return (
    <div>
      <Label>
        {label}
        <Img src={src} alt={alt} />
          <Input 
        value={value}
        onChange ={onChange}
        type="text"
        />
      </Label>
    </div>
  )
}

export {
  InputText
}