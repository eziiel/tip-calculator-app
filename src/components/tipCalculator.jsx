
import React from "react"
import { InputText } from "./componentsForm/ipuntText"
import { UseBtn } from "./componentsForm/useBtn"
import { MainStyled, ValuesSection, ValuesSectionRes } from "./styledCompontes"


const TipCalculator =() => {
  const total = UseBtn()

  console.log(total)

  return (
    <MainStyled>
      <ValuesSection>
        <InputText 
        label = "valor"
        {...total}
        />
      </ValuesSection>
      <ValuesSectionRes>
          <div>
            <div>
              Tip Amount /person
            </div>
            <div>
              R$ 0.00
            </div>
          </div>
          <div>
            <div>
              Total /person
            </div>
            <div>
              R$ 0.00
            </div>
          </div>
      </ValuesSectionRes>
    </MainStyled>
  )
}

export { TipCalculator }