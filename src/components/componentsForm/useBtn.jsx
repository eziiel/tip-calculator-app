
import React from 'react'


const UseBtn = () => {
  const [value, setValue] = React.useState('')

  function onChange ({target}) {
    setValue(target.value)
  }
  function Reset () {
    setValue('')
  }

 
  return {
    value,
    onChange,
    Reset,
  }
}
export {
  UseBtn
}