import styled from "styled-components";


export const Card = styled.div`
font-family: 'Press Start 2P', cursive;
color: white;
border: 5px solid  white;
min-width: 95%;
max-width: 95%;
height: 80%;
word-wrap: word-wrap;
padding: 1%;
margin: 0%;
background-color:  #000000;
display: flex;
align-items: center;
flex-direction: column;
border-radius: 10px;
font-size: 1.5rem;
&:hover{
  cursor:pointer;
}

h3 {
    margin-bottom: 20px;
}

img{
  width: 100%;
  height: 200px;
  border-radius: 10px;

  
}
:hover{

    transition: 1s;
    font-size: 1.7rem;
    background-color: #d40000;
    box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;


  }

  @media (min-width: 375px) and (max-width: 667px) {
        width: 90%;
        height: 100%;
        font-size: 1rem;

        :hover{

        transition: 1s;
        font-size: 1.2rem;

        }


    }

`
export const ContainerMae = styled.div`

background-color: white;
border: 4px solid #000000;
padding: 3px;
border-radius: 5%;
min-width: 20%;
max-width: 20%;
height: 95%;
word-wrap: word-wrap;
overflow: hidden;
box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
margin: 1%;

:hover{
    border-color:   #7a0303;
  }


  @media (min-width: 375px) and (max-width: 667px) {
    min-width: 93%;
    max-width: 20%;

   


    }
`

export const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5%;
  transition: all .1s ease-in-out;
  background: #fae62d ;
  border: 3px solid  #fcc000;
  margin-right: 7%;
  margin-left: 7%;
  margin-top: 5%;
  box-shadow: rgb(0 0 0 / 100%) 0px 4px 8px 0px;
  padding: 1% 1%;
  cursor: pointer;

    
  :hover{
    background:  #d40000;
    border-color:#7a0303;
    color: #000000;
  }
`