import { PokemonCard } from "../components/PokemonCard";
import usePokemons from "../hooks/usePokemons";

 const Home = () => {

   const [{ response: pokemons, error, loading }, fetchData] = usePokemons();

   console.log(pokemons)

return(
  <div className="w-screen h-screen flex items-center justify-center">
    <div>
      <h1 className="font-bold text-lg">Homeee</h1>
      {pokemons?.map((pokemon: any)=> <PokemonCard pokemon={pokemon} loading={false} key={pokemon.name}/>)}
    </div>
  </div>
 )};

export default Home;