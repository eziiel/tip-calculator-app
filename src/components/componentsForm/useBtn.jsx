
import React from 'react'


const UseBtn = () => {
  const [value, setValue] = React.useState('')

  function onChange ({target}) {
    setValue(target.value)
  }

 
  return {
    value,
    onChange,
  }
}
export {
  UseBtn
}