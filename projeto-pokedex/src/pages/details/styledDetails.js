import styled from "styled-components";


export const Container = styled.div`
    font-family: 'Press Start 2P', cursive; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 85vh;


@media (min-width: 375px) and (max-width: 667px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }
`

export const Header = styled.div`
  border-bottom: 2px solid orange;
  box-shadow: 0 0 5px 0; 
  width: 100%;
  height: 15%;
  background-color: #d40000;
  display: flex;
  align-items: center;
  color: #ffffff;
  letter-spacing: 4px;
  padding: 1%;
  justify-content: space-between;
  h1 {
    padding-left: 34%;
  }

  div{
    width: 15vw;
  }

  img{
    width: 100%;
    margin-left: 50px;
    opacity: 0.9;
    &:hover{
    opacity: 1;
    cursor: pointer;
  }
  }

  @media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;

    div{
      width: 40vw;
    }

    img{
      width: 63%;
      margin-left: 0;
    }

    Button{
      width: 40vw;
      height: 5vh;
    }
  }
`;

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  color: black;
  font-weight: bold;
  font-size: 1.4vw;
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

  @media (min-width: 375px) and (max-width: 667px) {
    margin-right: 0;
    font-size: 2vw;
  }
`;

export const Card1 = styled.div`
    font-size: 2vw;
    background-color: black;
    color: white;
    border: red 4px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: auto;
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
        margin: 0.6rem 0;
        width: 12vw;
        height: 15vh;
    }

    @media (min-width: 375px) and (max-width: 667px) {
        width: 70%;
        height: auto;
        margin: 15px;

        img {
          height: auto; 
          width: 100%
        }
    }
`

export const Card2 = styled.div`
    font-size: 1.5vw;
    background-color: black;
    color: white;
    border: red 4px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: auto;
    box-shadow: rgba(255, 0, 0, 0.4) 0px 5px, rgba(255, 0, 0, 0.3) 0px 10px, rgba(255, 0, 0, 0.2) 0px 15px, rgba(255, 0, 0, 0.1) 0px 20px, rgba(255, 0, 0, 0.05) 0px 25px;
    padding: 1rem; 
    
    @media (min-width: 375px) and (max-width: 667px) {
        width: 70%;
        height: auto;
        margin: 15px;
        font-size: 3vw;
    }
`


export const Card3 = styled.div`
    font-size: 1.5vw;
    background-color: black;
    color: white;
    border: red 4px solid;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: auto;
    box-shadow: rgba(255, 0, 0, 0.4) 5px 5px, rgba(255, 0, 0, 0.3) 10px 10px, rgba(255, 0, 0, 0.2) 15px 15px, rgba(255, 0, 0, 0.1) 20px 20px, rgba(255, 0, 0, 0.05) 25px 25px;
    padding: 1rem; 

    @media (min-width: 375px) and (max-width: 667px) {
        width: 70%;
        height: auto;
        margin: 15px;
        font-size: 3vw;
    }
`