import { useState, useEffect } from 'react';

const usePokemon = (startingValue, stretch) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let pokemonArray = [];

      for (let i = startingValue; i <= startingValue + stretch; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        pokemonArray.push(pokemon);
      }
      setFetchedData(pokemonArray);
      setIsLoading(false);
    };
    fetchData();
  }, [startingValue, stretch]);
  return [isLoading, fetchedData];
};

export default usePokemon;
