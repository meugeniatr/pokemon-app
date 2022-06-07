import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

interface IPokemon {
  id: number;
}

export interface IResponse {
  response: IPokemon[] | null;
  error: unknown;
  loading: boolean;
}

type IAxios = [IResponse, (params?: any) => Promise<void>];


const usePokemons = (): IAxios  => {
  const [response, setResponse] = useState<IPokemon[]| null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/pokemon/");
      setResponse(await Promise.all(res.data.results.map(async (pokemon: any) => {
        const pokemonDetails = await axios.get(pokemon.url)
        return {...pokemonDetails.data, image: pokemonDetails.data.sprites.front_default, types: pokemonDetails.data.types.map((type: any) => { return { name: type.type.name}})}
      })))
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [{ response, error, loading }, fetchData];
};

export default usePokemons;
