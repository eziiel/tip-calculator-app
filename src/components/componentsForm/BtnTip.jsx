import { BtnApp } from "./styledBtnTip"

function BtnTip ({children, ...props}) {


  return (
      <BtnApp
      {...props}> 
        {children}
      </BtnApp>
  )
}

export { BtnTip }