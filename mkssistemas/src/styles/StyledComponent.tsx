import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: navy;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: white;
`

export const Navbar = styled.div`
  width: 100vw;
  height: 101px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 0px 40px;
  background-color: #0F52BA;
  align-items: center;
`
export const BoxTitle = styled.div`
   display: flex;
   padding: 0px;
   color: white;
   gap: 5px;
   
`
export const TitleUpperCase = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
  
`

export const Title = styled.div`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  padding-top: 5px;

`
export const BoxCart = styled.div`
  width: 90px;
  height: 45px;
  top: 29px;
  left: 1262px;
  gap: 0px;
  border-radius: 8px 8px 8px 8px;
  opacity: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

`
export const IconCart = styled.p`
  width: 19.01px;
  height: 18px;
  top: 43px;
  left: 1277px;
  gap: 0px;
  opacity: 0px;
  text-decoration: black;
`
export const NumberCart = styled.h3`
  width: 13px;
  height: 22px;
  top: 40px;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 800;
  line-height: 21.94px;
  text-align: left;
  
`

export const ConatinerMain = styled.section`
  width: 100vw;
  height: auto;
  min-height: calc(100vh - 135px);
  display: grid;
  justify-content: center;
  align-items: center;
`
export const BoxItens = styled.div`
  width: 938px;
  height: 601px;
  background-color: red;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;

`


export default function StyledComponent() {
  return <Button>Click me</Button>;
}

