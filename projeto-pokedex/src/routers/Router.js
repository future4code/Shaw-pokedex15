import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Pokedex from "../pages/pokedex/Pokedex";
import Details from "../pages/details/Details";
import React, { useState } from "react";

const Router = () => {

  const [pokedexList, setPokedexList] = useState([])
  const [pokeList, setPokeList] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home pokeList={pokeList} setPokeList={setPokeList} pokedexList={pokedexList} setPokedexList={setPokedexList} tittle={"Home"}/>} />
        <Route path="/pokedex" element={<Pokedex pokeList={pokeList} setPokeList={setPokeList} pokedexList={pokedexList} setPokedexList={setPokedexList} tittle={"Pokedex"}/>} />
        <Route path="/pokemon/:name" element={<Details />} tittle={"Detalhes"}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;