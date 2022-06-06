import { useState, useEffect } from 'react';

const usePokemonData = (limit, offset) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      setFetchedData(pokemon.results);
      setIsLoading(false);
    };
    fetchData();
  }, [limit, offset]);
  return [isLoading, fetchedData];
};

export default usePokemonData;
