const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getPokemons = () => {
    return fetch(url).then((response) => response.json());
}