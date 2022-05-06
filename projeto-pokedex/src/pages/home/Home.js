import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import CardPokemon from "../../components/CardPokemon";
import { GlobalContext } from "../../global/GlobalContext";

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
        <div>
            <div>
                <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
                <h2>Home Page</h2>
                {cardPokemons}
            </div>
            <div>
                <button onClick={() => functions.onClickSetPageZero()}>1</button>
                <button onClick={() => functions.onClickSetPageTwenty()}>2</button>
                <button onClick={() => functions.onClickSetPageFourty()}>3</button>
                <button onClick={() => functions.onClickSetPageSixty()}>4</button>
            </div>
        </div>
    )
}

export default Home;