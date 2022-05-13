import styled from "styled-components"

const MainStyled = styled.main`
  width: 850px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-content: space-evenly;
  gap: 2rem;
  border-radius: 20px;
  background-color: #FFFBFF;
`;

const ValuesSection = styled.section`
  font-size: 1rem;
  border-radius: 20px;
  margin: 2rem;
`
const ValuesSectionRes = styled.section`
  font-size: 1rem;
  background: #0B3B1A;
  border-radius: 20px;
  margin: 2rem;
`
const divInfoValue = styled.div`
  color: #fff;
`

export { 
  MainStyled,
  ValuesSection,
  ValuesSectionRes,
  divInfoValue,
}