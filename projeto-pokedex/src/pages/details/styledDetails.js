import styled from "styled-components";

export const Container = styled.div`
    width: 99vw;
    height: 99vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

@media (min-width: 375px) and (max-width: 667px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`

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