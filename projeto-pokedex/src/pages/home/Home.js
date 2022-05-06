import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardPokemon from "../../components/CardPokemon";
import { Button, Cont, Container, ContainerCardTrip, Header } from "./StyledHome";
import { GlobalContext } from "../../global/GlobalContext";
import { goToPokedex } from "../../routers/Cordinator";
import logo from "../../assets/logoPokemon.png"

const Home = (props) => {
    const navigate = useNavigate()
    const { states, functions, requests } = useContext(GlobalContext)

    const cardPokemons = states.pokeList.map((pokemon) => {
        return (
            <CardPokemon key={pokemon.name}
                pokeList={props.pokeList}
                setPokeList={props.setPokeList}
                pokemon={pokemon}
                setPokedexList={props.setPokedexList}
                pokedexList={props.pokedexList} />
        )
    })

    useEffect(() => {
        if (!props.pokedexList.length) {
            requests.getPokemons(states.page);
        }
    }, [states.page, props.pokedexList])

    return (
       <Container>
          <Cont>
            <Header>
                <img src={logo} alt={"logo do Pokemon, gotta catch'em all"}/>
                <Button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</Button>
            </Header>
            <ContainerCardTrip>
                {cardPokemons}
            </ContainerCardTrip>
            <div>
                <button onClick={() => functions.onClickSetPageZero()}>1</button>
                <button onClick={() => functions.onClickSetPageTwenty()}>2</button>
                <button onClick={() => functions.onClickSetPageFourty()}>3</button>
                <button onClick={() => functions.onClickSetPageSixty()}>4</button>
            </div>
          </Cont>
        </Container>
    )
}

export default Home;
