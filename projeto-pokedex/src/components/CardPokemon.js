import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useEffect, useState } from "react";
import { goToDatils } from "../routers/Cordinator";
import { useNavigate } from "react-router-dom";
import { Button, CardTrip, ContainerMae } from "./styledCardPokemon";

const CardPokemon = (props) => {
  const [infosPoke, setInfoPokes] = useState({});
  const navigate = useNavigate()

  const getPokeInfos = () => {
    axios
      .get(`${baseUrl}pokemon/${props.pokemon.name}`)
      .then((res) => {
        setInfoPokes(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const setPokedex = () => {
    const newPokedex = [...props.pokedexList, infosPoke]
    props.setPokedexList(newPokedex);

    const newPokeList = props.pokeList.filter((item) => {
      return item.name != infosPoke.name
    })
    props.setPokeLIst(newPokeList)
  }

  useEffect(() => {
    getPokeInfos();
  }, []);

  return (
    <ContainerMae>
      
      <CardTrip>
        <img
          src={infosPoke.sprites?.front_default}
          alt={`${props.pokemon.name}`}
        />
      <h3>{props.pokemon.name}</h3>
      </CardTrip>
      <div>
        <Button onClick={() => setPokedex()}>Adicionar</Button>
        {/* <button onClick={() => deletePokemon()}>remover a Pokedex</button> */}
        <Button onClick={() => goToDatils(navigate, infosPoke.id)}>Ver Detalhes</Button>
      </div>
    </ContainerMae>
  );
};

export default CardPokemon;
