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
  position: fixed;
  z-index: 900;
  
  @media (max-width: 401px) {
    padding: 0px 10px;
  }

  @media (max-height: 500px) {
    position: static;
  }
`
export const BoxTitle = styled.div`
   display: flex;
   padding: 0px;
   color: white;
   gap: 5px;
   
`
export const TitleUpperCase = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;

  @media (max-width: 401px) {
    font-size: 35px;
  }
  
`
export const Title = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
  padding-top: 5px;

`
export const BoxCart = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px 8px 8px 8px;
  opacity: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 401px) {
    width: 75px;
    height: 40px;
  }

`
export const IconCart = styled.p`
  width: 19.01px;
  height: 18px;
  text-decoration: black;
  font-size: 20px;
`
export const NumberCart = styled.h3`
  width: 13px;
  height: 22px;
  top: 40px;
  line-height: 21.94px;
  font-size: 18px;
  font-weight: 800;
  text-align: left;
  
`






export const ConatinerMain = styled.section`
  width: 100vw;
  height: calc(auto + 50px);
  padding-top: 101px;
  min-height: calc(100vh - 180px);
  display: grid;
  justify-content: center;
  align-items: center;
`
export const BoxMain = styled.div`
  width: 938px;
  height: auto;
  min-height: 601px;
  display: grid;
  gap: 10px;
  @media (max-width: 978px) {
    padding-top: 40px;
  }

`
export const ConatinerItens = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;

  @media (max-width: 978px) {
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 778px) {
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 50px;
  }
  @media (max-width: 580px) {
    grid-template-columns: auto;
    
  }
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

  @media (max-width: 978px) {
    height: 350px;
  }
  @media (max-width: 778px) {
    margin: 0px 20px;
    
  }
  @media (max-width: 580px) {
    margin: 0px 0px;
    
  }
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
  border-radius: 0px 0px 8px 8px;
  border-color: white;
  background-color: #0F52BA;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 978px) {
    position: relative;
    top: 10px;
  }
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
  position: absolute;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #EEEEEE;
  text-align: center;
  color: black;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  bottom: 0px;

  @media (max-width: 975px) {
    position: static;
    margin-top: 25px;
  }

`





export const ContainerCart = styled.div`
  width: 486px;
  height: 100vh;
  min-height: 800px;
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: #0F52BA;
  padding: 20px 20px;
  box-shadow: -5px 0px 6px 0px #00000021;
  display: grid;
  z-index: 1000;

  @media (max-width: 486px) {
    width: 100vw;
    height: 100%;
    position: fixed;
    min-height: 500px;
  }

  @media (max-width: 380px) {
    width: 100vw;
  }

  @media (max-height: 500px) {
    position: absolute;
  }

`
export const BoxCartTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  color: white;
  margin-bottom: 50px;
  
  
  
`
export const CartTitle = styled.p`
  font-size: 27px;
  font-weight: 700;
  line-height: 32.91px;
  text-align: left;

  @media (max-width: 380px) {
    font-size: 22px;
    width: 150px;
  }
`
export const CartBtnClose = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 100%;
  color: white;
  background-color: black;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
`
export const ContainerCartProducts = styled.div`

  width: 100%;
  height: 71vh;
  min-height: 600px;

  @media (max-width: 380px) {
    width: 265px;
  }
  
`
export const BoxCartProducts = styled.div`

  width: 100%;
  margin: auto;
  height: 95px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 60px 120px auto auto;
  align-items: center;
  padding-top: 15px;
  justify-content: space-around;
  background-color: white;
  color: black;
  margin-top: 20px;

  @media (max-width: 380px) {
    grid-template-columns: 50px 75px auto auto;
    width: 90vw;
  }
`
export const BoxCartProductsPhoto = styled.div`
  width: 36px;
  height: auto;
`
export const CartProductsBtnClose = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  color: white;
  background-color: black;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  right: -412px;
  top: -87px;
  cursor: pointer;

  @media (max-width: 486px) {
    
    left: calc(100vw - 70px);
    
  }
  @media (max-width: 400px) {
    left: calc(100vw - 60px);
  }
  @media (max-width: 328px) {
    left: calc(100vw - 58px);
  }
  
  
`
export const CartProductsTitles = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: #2C2C2C;
  
  @media (max-width: 380px) {
    font-size: 11px;
    padding-left: 5px;
    
  }
;
`
export const CartProductsBtnQnt = styled.p`
  font-size: 5px;
  font-weight: 400;
  line-height: 6.1px;
  text-align: left;
   
`
export const CartProductsPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;

  @media (max-width: 380px) {
    font-size: 13px;
  }

`
export const CartProductsBtnMore = styled.div`
  width: 70px;
  height: auto;
  padding: 2px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 10px 30px 10px;
  border: solid 1px #BFBFBF;
  margin-top: 1px;
  justify-content: center;
  text-align: center;
  align-items: center;
  
  @media (max-width: 380px) {
    width: 50px;
    grid-template-columns: 7px 22px 7px;
  }
`
export const BoxCartValue = styled.div`
  width: 90%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: 0px 25px;
  justify-content: space-between;
  color: white;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  position: absolute;
  bottom: 105px;
  
`
export const BoxCartFinish = styled.div`
  width: 486px;
  position: absolute;
  height: 80px;
  background-color: black;
  text-align: center;
  color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  left: 0px;
  bottom: 0px;
  margin-top: 41px;
  cursor: pointer;

  @media (max-width: 486px) {
    width: 100vw;
    
  }
  
`


