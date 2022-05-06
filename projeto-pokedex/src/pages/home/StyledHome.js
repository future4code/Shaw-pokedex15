import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 99vh;

  @media (min-width: 375px) and (max-width: 667px) {
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
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
  h1 {
    padding-left: 34%;
  }

  div{
    width: 15vw;
  }

  img{
    width: 100%;
    margin-left: 50px;
  }

  @media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    width: 100vw;
    font-size: 17px;
    display: flex;
    justify-content: center;

    div{
      width: 40vw;
    }

    img{
      margin-left: 0;
    }

    Button{
      width: 40vw;
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

export const ContainerCard = styled.div`
  background-color: #ffffff;
  border: 4px solid #d40000;
  margin-bottom: 0%;
  margin-top: 5%;
  width: 100%;
  height: 55%;
  display: flex;
  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  gap: 1%;
  padding: 2%;
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
