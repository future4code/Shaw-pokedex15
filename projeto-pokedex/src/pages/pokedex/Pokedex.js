import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goBack } from "../../routers/Cordinator";

const Pokedex = (props) => {
    const navigate = useNavigate()

    const deletePokemon = (pokemomName) => {
        const newPokedexList = props.pokedexList.filter((item) => {
            return item.name != pokemomName.name
        })
        props.setPokedexList(newPokedexList)
        const newPokeList = [...props.pokeList, pokemomName]
        props.setPokeList(newPokeList)
    }

    const pokemons = props.pokedexList.map((pokemon) => {

        return (
            <div key={pokemon.id}>
                <div>
                    <h2>{pokemon.name}</h2>
                    <img
                        src={pokemon.sprites?.front_default}
                        alt={`${pokemon.name}`}
                    />
                </div>
                <div>
                    <button onClick={() => deletePokemon(pokemon)}>remover a Pokedex</button>
                    <button onClick={() => goToDetails(navigate, pokemon.id)}>Ver Detalhes</button>
                </div>
            </div>
        )
    })
    return (
        <div>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            {pokemons}
        </div>
    )
}

export default Pokedex;