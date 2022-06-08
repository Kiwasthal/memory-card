const findBackground = (pokemon, num) => {
  if (pokemon.types[num])
    switch (pokemon.types[num].type.name) {
      case 'fire':
        return '#f0802f';
      case 'water':
        return '#6890f0';
      case 'normal':
        return '#a8a878';
      case 'grass':
        return '#78c750';
      case 'electric':
        return '#f6d030';
      case 'ice':
        return '#98d8d8';
      case 'fighting':
        return '#c03029';
      case 'poison':
        return '#9f409f';
      case 'ground':
        return '#e0c068';
      case 'flying':
        return '#a890f0';
      case 'psychic':
        return '#ee5a86';
      case 'bug':
        return '#a8b820';
      case 'rock':
        return '#b8a038';
      case 'ghost':
        return '#705898';
      case 'dark':
        return '#705a4a';
      case 'dragon':
        return '#7038f8';
      case 'steel':
        return '#b8b8d0';
      case 'fairy':
        return '#f0b6bd';
      default:
        return 'white';
    }
};

export default findBackground;
