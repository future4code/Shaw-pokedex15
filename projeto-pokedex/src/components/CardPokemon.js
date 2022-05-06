import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useEffect, useState, useContext } from "react";
import { goToDetails } from "../routers/Cordinator";
import { useNavigate } from "react-router-dom";
import { Button, CardTrip, ContainerMae } from "./styledCardPokemon";
import { GlobalContext } from "../global/GlobalContext";


const CardPokemon = (props) => {
  const [infosPoke, setInfoPokes] = useState({});
  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalContext)

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

    const newPokeList = states.pokeList.filter((item) => {
      return item.name != infosPoke.name
    })
    setters.setPokeList(newPokeList)
  }

  useEffect(() => {
    getPokeInfos();
  }, []);

  return (
    <ContainerMae>
      <CardTrip>
        <h2>{props.pokemon.name}</h2>
        <img onClick={() => goToDetails(navigate, infosPoke.name)}
          src={infosPoke.sprites?.front_default}
          alt={`${props.pokemon.name}`}
        />
      </CardTrip>
      <div>
        <Button onClick={() => setPokedex()}>Adicionar a Pokedex</Button>
      </div>
    </ContainerMae>
  );
};

export default CardPokemon;
