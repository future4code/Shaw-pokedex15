import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goBack, goToHome } from "../../routers/Cordinator";
import { GlobalContext } from "../../global/GlobalContext";
import { Button, Cont, Container, ContainerCardPoke, Header } from "./styledPokedex";
import logo from "../../assets/logoPokemon.png"


const Pokedex = (props) => {
    const navigate = useNavigate()
    const { states, setters } = useContext(GlobalContext)


    const deletePokemon = (pokemomName) => {
        const newPokedexList = props.pokedexList.filter((item) => {
            return item.name !== pokemomName.name
        })
        props.setPokedexList(newPokedexList)

        const newPokeList = [...states.pokeList, pokemomName]
        setters.setPokeList(newPokeList)
    }

    const pokemons = props.pokedexList.map((pokemon) => {

        return (
            <Cont key={pokemon.id}>
                <ContainerCardPoke>
                    <div onClick={() => goToDetails(navigate, pokemon.id)}>
                        <img
                            src={pokemon.sprites?.front_default}
                            alt={`${pokemon.name}`}
                        />
                    </div>
                    <h1>{pokemon.name}</h1>
                    <Button onClick={() => deletePokemon(pokemon)}>remover</Button>
                </ContainerCardPoke>
            </Cont>
        )
    })
    return (
        <Container>
            <Header>
                <img src={logo} onClick={() => goToHome(navigate)} alt={"logo do Pokemon, gotta catch'em all"} />
                <Button onClick={() => goBack(navigate)}>Voltar</Button>
            </Header>
            {pokemons}
        </Container>
    )
}

export default Pokedex;