
import React from "react"
import { Img, Input, Label, Span, SpanError, Spantitle } from "./styledForm"


const InputText = ({label,value,onChange,src,alt,error}) => {

  return (
    <div>
      <Label>
        <Span>
          <Spantitle>
          {label}
          </Spantitle>

          <SpanError>
          {error}
          </SpanError>
        </Span>
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