import styled from 'styled-components';

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
  
  min-height: calc(100vh - 180px);
  display: grid;
  justify-content: center;
  align-items: center;
`
export const BoxMain = styled.div`
  width: 938px;
  height: 601px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
`

export const ConatinerItens = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`
export const BoxItens = styled.div`
  width: 218px;
  height: auto;
  min-height: 285px;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  display: grid;
  justify-items: center;
  align-items: center;
`
export const ItensPhoto = styled.div`
  margin-top: 15px;
  width: 111px;
  height: 138px;
`
export const ItensBoxTitle = styled.div`
  width: 90%;
  height: auto;
  min-height: 38px;
  display: grid;
  grid-template-columns: auto auto;
  color: #2C2C2C;
  align-items: center;
  gap: 10px;
`
export const ItensBrand = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`
export const ItensName = styled.div`
  
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`

export const BoxItensPrice = styled.div`
  width: auto;
  min-width: 64px;
  height: 26px;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const ItensDescpition = styled.div`

  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  text-align: left;
  color:  #2C2C2C;
  padding: 20px 10px;
`
export const BoxItensBtn = styled.div`
  width: 218px;
  height: 31.91px;
  gap: 0px;
  border-radius: 0px 0px 8px 8px;
  border-color: white;
  background-color: #0F52BA;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
`

export const ItensBtnText = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Footer = styled.div`
  width: 100vw;
  height: 38px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEEEEE;
  text-align: center;
  color: black;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.63px;
  text-align: left;

`