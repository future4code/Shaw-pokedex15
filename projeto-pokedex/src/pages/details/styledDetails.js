import styled from "styled-components";


export const Container = styled.div`
    font-family: 'Press Start 2P', cursive; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;

@media (min-width: 375px) and (max-width: 667px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`

export const Header = styled.div`
  font-family: 'Press Start 2P', cursive;
  width: 100%;
  height: 15%;
  background-color: #d40000;
  display: flex;
  align-items: center;
  color: #ffffff;
  letter-spacing: 4px;
  font-size: 2.3rem;
  padding: 1%;
  justify-content: space-between;
  

  div{
    width: 15vw;
  }

  img{
    width: 100%;
    &:hover{
    cursor: pointer;
  }
  }

  @media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    width: 100vw;
    font-size: 17px;
    display: flex;
    justify-content: center;
    h1 {
      padding: 1%;
    }

    div{
      width: 55vw;
    }

    Button{
      width: 30vw;
      height: 4vh;
    }
  }
`;

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 5%;
  transition: all 0.1s ease-in-out;
  background: #fae62d;
  border: 3px solid #fcc000;
  margin-right: 5%;
  margin-left: 5%;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
  padding: 1% 1%;
  cursor: pointer;

  :hover {
    background: #d40000;
    border-color: #7a0303;
    color: #000000;
  }
`;

export const Card1 = styled.div`
    background-color: black;
    color: white;
    border: red 4px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 60vh;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(255, 0, 0, 0.4) -5px 5px, rgba(255, 0, 0, 0.3) -10px 10px, rgba(255, 0, 0, 0.2) -15px 15px, rgba(255, 0, 0, 0.1) -20px 20px, rgba(255, 0, 0, 0.05) -25px 25px;

    div{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;

    }
    img{
        margin: 10px;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 375px) and (max-width: 667px) {
        width: 70%;
        height: 45vh;
        margin: 15px;
    }
`

export const Card2 = styled.div`
    background-color: black;
    color: white;
    border: red 4px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 60vh;
    box-shadow: rgba(255, 0, 0, 0.4) 0px 5px, rgba(255, 0, 0, 0.3) 0px 10px, rgba(255, 0, 0, 0.2) 0px 15px, rgba(255, 0, 0, 0.1) 0px 20px, rgba(255, 0, 0, 0.05) 0px 25px;

    p{
        padding: 10px;
    }

    @media (min-width: 375px) and (max-width: 667px) {
        width: 70%;
        height: 80%;
        margin: 15px;
    }
`


export const Card3 = styled.div`
    background-color: black;
    color: white;
    border: red 4px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 60vh;
    box-shadow: rgba(255, 0, 0, 0.4) 5px 5px, rgba(255, 0, 0, 0.3) 10px 10px, rgba(255, 0, 0, 0.2) 15px 15px, rgba(255, 0, 0, 0.1) 20px 20px, rgba(255, 0, 0, 0.05) 25px 25px;

    p{
        padding: 4px;
    }

    @media (min-width: 375px) and (max-width: 667px) {
        width: 70%;
        height: 80%;
        margin: 15px;
    }
`