import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";

export default function GlobalState(props) {
    const [pokedexList, setPokedexList] = useState([])
    const [infosPoke, setInfoPokes] = useState({});
    const [details, setDetails] = useState({})
    const [page, setPage] = useState(0) //-- ok
    const [pokeList, setPokeList] = useState([]) //-- ok

    //-- FUNCOES ON CLICK PAGINACAO --//
    const onClickSetPageZero = (() => {
        setPage(0)
    })
    const onClickSetPageTwenty = (() => {
        setPage(20)
    })
    const onClickSetPageFourty = (() => {
        setPage(40)
    })
    const onClickSetPageSixty = (() => {
        setPage(60)
    })

    const getPokemons = async (pagina) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`);
            const newPokeList = response.data.results.filter((item) => {
                return !pokedexList.find((pokemon) => {
                    return pokemon.name === item.name
                })
            })
            setPokeList(newPokeList)
        } catch (err) {
            console.log("Erro", err.response);
        }
    }



    const states = { pokeList, pokedexList, infosPoke, details, page }
    const setters = { setPokeList, setPokedexList, setDetails, setInfoPokes, setPage }
    const functions = { onClickSetPageZero, onClickSetPageTwenty, onClickSetPageFourty, onClickSetPageSixty }
    const requests = { getPokemons }
    return (
        <GlobalContext.Provider value={{ states, setters, functions, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}