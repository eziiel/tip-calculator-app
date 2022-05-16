import styled from "styled-components"

const Label = styled.label`
  display: flex;
  font-weight: bold;
  gap: 1rem;
  flex-direction: column;
  position: relative;
`
const Span = styled.span`
  display: flex;
  justify-content: space-between;
`
const Spantitle = styled.span`
  align-content: start;
`
const SpanError = styled.span`
  color: red;
  font-size: .8rem;
`
const Input = styled.input`
  border: none;
  background: rgb(238, 238, 238);
  padding: .8rem;
  padding-left: 3rem;
  padding-left: 3.5rem;
  border-radius: 5px;
  font-size: 1.5rem;
  text-align: right;
`
const Img = styled.img`
  position: absolute; 
  bottom: 20%;
  max-width: 10%;
  left: 5%;
`


export {
  Label,
  Input,
  Img,
  Span,
  Spantitle,
  SpanError,
}