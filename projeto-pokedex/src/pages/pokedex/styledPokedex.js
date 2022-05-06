import styled from "styled-components";



export const Container = styled.div`
  width: 99vw;
  height: 99vh;
  background-color: black;

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

  img{
    width: 200px;
    &:hover{
    cursor: pointer;
  }

  @media (min-width: 375px) and (max-width: 667px) {
    height: 10vh;
    font-size: 17px;
    display: flex;
    justify-content: space-between;

    img {
      width: 40%;
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

export const Cont = styled.div`
  width: 100%;
  /* height: 40%; */
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
`;

export const ContainerCardTrip = styled.div`
  background-color: #ffffff;
  border: 4px solid #d40000;
  margin-bottom: 0%;
  margin-top: 2%;
  width: 60%;
  height: 12%;
  display: flex;
  overflow: auto;
  flex: none;
  flex-flow: row nowrap;
  gap: 1%;
  padding: 2%;
  overflow: hidden;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  img {
    background-color: #d40000;
    border-radius: 50%;
    box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
    transition: all 1s ease-in-out;
    cursor: pointer;
    width: 100%;

    :hover {
      background: #000000;
      border-color: #7a0303;
      width: 120%;
    }
  }

  @media (min-width: 375px) and (max-width: 667px) {
    display: flex;
    flex-direction: column;
    background-color: #000000;
    border: #000000;
    h1 {
      display: none;
    }
  }
`;
