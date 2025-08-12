// src/components/PokemonDetails/PokemonDetails.jsx
import { useParams } from "react-router";

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  const { pokemonId} = useParams();
  console.log("pokemonId:", pokemonId);

  const singlePokemon = props.pokemon.find((poke) => {
   return poke._id === Number(pokemonId);
  })
  console.log("This is the Poke:", singlePokemon)

  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
