import React, { useState, useEffect } from "react";
import { goToHome, goToPokedex } from "../../routers/Cordinator";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
import {Container, Card1, Card2, Card3 } from "./styledDetails"

const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        getPokeDetails()
    }, [])

    const getPokeDetails = () => {
        axios.get(`${baseUrl}pokemon/${params.name}`)
            .then((res) => {
                setDetails(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <Container>
            {/* <div>
                <button onClick={() => goToHome(navigate)}>Voltar</button>
                <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
            </div> */}
            <Card1>
                <h3>{details.name}</h3>
                <div>
                    <img src={details.sprites?.versions['generation-v']['black-white'].animated.front_default} />
                    <img src={details.sprites?.versions['generation-v']['black-white'].animated.back_default} />
                </div>
            </Card1>
            <Card2>
                <h3>Poderes</h3>
                <div>
                    <p> <strong>HP: </strong>{details.stats && details.stats[0].base_stat}  </p>
                    <p> <strong>Attack: </strong>{details.stats && details.stats[1].base_stat} </p>
                    <p> <strong>Defense: </strong>{details.stats && details.stats[2].base_stat} </p>
                    <p> <strong>Special-attack: </strong>{details.stats && details.stats[3].base_stat} </p>
                    <p> <strong>Special-defense: </strong>{details.stats && details.stats[4].base_stat} </p>
                    <p> <strong>Speed: </strong>{details.stats && details?.stats[5].base_stat}</p>
                </div>
            </Card2>
            <Card3>
                <div>
                    <h3>Tipo(s) do Pokemom</h3>
                    <p>{details.types && details.types[0].type.name}</p>
                    <p>{details.types && details.types[1] ? details.types[1].type.name : null}</p>
                </div>
                <div>

                    <h3>Principais ataques</h3>
                    <p>{details.moves && details.moves[0] ? details.moves[0].move.name : null} </p>
                    <p>{details.moves && details.moves[1] ? details.moves[1].move.name : null} </p>
                    <p>{details.moves && details.moves[2] ? details.moves[2].move.name : null} </p>
                    <p>{details.moves && details.moves[3] ? details.moves[3].move.name : null} </p>
                    <p>{details.moves && details.moves[4] ? details.moves[4].move.name : null} </p>
                </div>
            </Card3>
        </Container>
    )
}

export default Details;