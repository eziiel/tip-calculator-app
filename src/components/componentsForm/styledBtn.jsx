
import styled from "styled-components"

const BtnStyled = styled.button`
  width: 100%;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: .7rem 0;
  border: none;
  background: #7EEC9F;
  color: #0B3B1A;
  font-weight: bold;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 3px #7EEC9F;
    background: #96e9af;
  }
  :disabled {
    opacity: .5;
    box-shadow: none;
  }
`

export {
  BtnStyled,

}