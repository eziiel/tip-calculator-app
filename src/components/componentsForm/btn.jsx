import React, { useEffect } from "react"
import { BtnStyled } from "./styledBtn"


function Btn ({children,...props})  {

  return (
    <>
      <BtnStyled
      {...props}
      >
        {children}
      </BtnStyled>
    </>
  )
}
export { Btn }