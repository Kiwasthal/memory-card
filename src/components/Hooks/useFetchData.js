const getPokemon = async (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  return pokemon;
};

export default getPokemon;
