import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 375px) and (max-width: 667px) {
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
  border-bottom: 2px solid orange;
  box-shadow: 0 0 5px 0; 
  width: 100vw;
  height: 15%;
  background-color: #d40000;
  display: flex;
  align-items: center;
  color: #ffffff; 
  justify-content: space-between;
  h1 {
    padding-left: 34%;
  }

  div{
    width: 15vw;
  }

  img{
    opacity: 0.9;
    width: 100%;
    margin-left: 50px;
        &:hover{
    opacity: 1;      
    cursor: pointer;
  }
  }

  @media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    display: flex;
    justify-content: center;
    div{
      width: 35vw;
    }

    img{
      width: 60%;
      margin-left: 0;
    }

    Button{
      width: 35vw;
      height: 5vh;
    }
  }
`;

export const Cont = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
`;

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  color: black;
  font-weight: bold;
  font-size: 0.75rem;
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
    margin-right: 0
  }
`;

export const ContainerCard = styled.div`
  background-color: #ffffff;
  border-top: 4px solid #d40000;
  margin: 5% 2% 2% 0; 
  width: 100%;
  height: 55%;
  display: flex;
  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  padding-bottom: 3%;
  overflow: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 10px;
    border-radius: 400px;
    padding: 400px;
    box-decoration-break: clone;
    position: relative;
    margin: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #d40000;
  }
  h3 {
    color: #000000;
  }

  @media (min-width: 375px) and (max-width: 667px) {
    width: 99%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    background-color: #000000;
  }
`;
