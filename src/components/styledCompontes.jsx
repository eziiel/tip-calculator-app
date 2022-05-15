import styled from "styled-components"

const MainStyled = styled.main`
  width: 850px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-content: space-evenly;
  gap: 2rem;
  border-radius: 20px;
  background: #FFFBFF;
`;

const ValuesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1rem;
  gap: 1rem;
  border-radius: 20px;
  padding: 2rem 0 2rem 3rem;
  /* margin-left: 1rem; */
`
const ValuesSectionRes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  background: #0B3B1A;
  border-radius: 20px;
  margin: 2rem;
  padding:2rem;
`
const DivValueGeral = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 2rem 0 ;
  align-items: center;
  `
const DivInfoValue = styled.div`
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;
  font-weight: bold;
  letter-spacing: .5px;
`
const DivValue = styled.div`
  color: #7EEC9F;
  font-size: 3rem;
`
const PTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: .5px;
  padding-bottom: .5rem;
`
const PSubTitle = styled.p`
  color: #bee7cbd8;
  font-size: .875rem;
  margin: .5rem;
  font-weight: bold;
  letter-spacing: .5px;
`
const ContentPit = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`


export { 
  MainStyled,
  ValuesSection,
  ValuesSectionRes,
  DivInfoValue,
  DivValueGeral,
  DivValue,
  PTitle,
  PSubTitle,
  ContentPit,
}