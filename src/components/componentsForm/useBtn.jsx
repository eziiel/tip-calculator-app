
import React from 'react'

const UseBtn = () => {
  const [value, setValue] = React.useState('')

  function onChange ({target}) {
    setValue(target.value)
    console.log(target)
  }

  return {
    value,
    onChange,
  }
}
export {
  UseBtn
}