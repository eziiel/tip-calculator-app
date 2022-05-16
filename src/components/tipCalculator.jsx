
import React from "react"
import { InputText } from "./componentsForm/ipuntText"
import { UseBtn } from "./componentsForm/useBtn"
import { ContentPit, DivInfoValue, DivValue, DivValueGeral, MainStyled, PSubTitle, PTitle, ValuesSection, ValuesSectionRes } from "./styledCompontes"
import iconPerson from "../images/icon-person.svg"
import iconReal from "../images/icon-real.svg"
import { Btn } from "./componentsForm/btn"
import { BtnTip } from "./componentsForm/BtnTip"



const TipCalculator =() => {
  const [statusReset, setStatusReset] = React.useState(false)

  const [percent, setPercent] = React.useState(0)

  const [cleanTotal, setCleanTotal] = React.useState(0)

  const [cleanPerson, setCleanPerson] = React.useState(0)
  const [slicePerson, setSlicePerson] = React.useState(0)
  const [resPercent, setResPercent] = React.useState(0)
  
  const [tip, setTip] = React.useState(0)
  const [value, setValue] = React.useState(0)
  
  const [errorTotal, setErrorTotal] = React.useState('aaa')
  const [errorPerson, setErrorPerson] = React.useState('')


  const person = UseBtn()
  const total = UseBtn()


  let totalValue = total.value
  let personValue = person.value

  totalValue = totalValue.replace(/[A-Z a-z]/g,'').replace(/[.,]{1,}/g, '.')
  let res = Number(totalValue.slice(0,totalValue.indexOf('.')+1) + totalValue.slice(totalValue.indexOf('')).replaceAll('.',''))

  function handleReset () {
    setTip(0)
    setValue(0)
    setCleanPerson(0)
    setPercent(0)
    person.Reset()
    total.Reset()
  }
  
  React.useEffect(() => {
    if( totalValue && personValue && personValue != 0) {
      setStatusReset(false)
    } else {
      setStatusReset(true)
    }
  }, [person.value, total.value])

  function handleTip ({target})  {
    if(!(totalValue && personValue)) return null

    setPercent(Number(target.innerText.slice(0,2)/100))
    
    setCleanTotal(Number(res))
    setCleanPerson(Number(personValue.replaceAll(/\D/g,'')))

    cleanPerson === 0? setErrorPerson('preencha um valor maior que 0')
    :setErrorPerson('')

  }
  
  
  React.useEffect(() => {
    let res = cleanPerson ==0 ? 0 : cleanTotal/cleanPerson
    let resPer = cleanPerson ==0? 0 : res * percent
    
    res && setSlicePerson(res)
    resPer && setResPercent(resPer)
    
  },[percent])
  
  
  React.useEffect(() => {
    setTip(resPercent)
    setValue(slicePerson + resPercent)
  },[resPercent])

  return (
    <MainStyled>
      <ValuesSection>

        <InputText 
        label = "Bill"
        src = {iconReal}
        alt = "icon Real"
        error={errorTotal}
        {...total}
        />

        <div>
          <PTitle>Select Tip %</PTitle>
            <ContentPit>
              <BtnTip 
                onClick = {handleTip}
                children="10%"/>
              <BtnTip 
                onClick = {handleTip}
                children="15%"/>
              <BtnTip 
                onClick = {handleTip}
                children="20%"/>
              <BtnTip 
                onClick = {handleTip}
                children="25%"/>
              <BtnTip 
                onClick = {handleTip}
                children="50%"/>
            </ContentPit>
        </div>
        
        <InputText 
        label = "Number of People"
        src = {iconPerson}
        alt = "icon Person"
        error={errorPerson}
        {...person}
        />
      </ValuesSection>

      <ValuesSectionRes>
        <div>
          <DivValueGeral>
            <DivInfoValue>
              <PTitle>Tip Amount</PTitle>
              <PSubTitle>/ person</PSubTitle>
            </DivInfoValue>
            <DivValue>
              $ {tip}
            </DivValue>
          </DivValueGeral>
          <DivValueGeral>
            <DivInfoValue>
              <PTitle>Total</PTitle>
              <PSubTitle>/ person</PSubTitle>
            </DivInfoValue>
            <DivValue>
              $ {value}
            </DivValue>
          </DivValueGeral>
        </div>

          <Btn children="Reset"
          onClick = {(handleReset)}
          disabled = {statusReset}
          />
      </ValuesSectionRes>
    </MainStyled>
  )
}

export { TipCalculator }