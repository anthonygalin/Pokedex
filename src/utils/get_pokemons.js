/* Get Pokemons, first 150 */
import axios from "axios";

export async function getPokemons() {
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => {
        return res.data.result;
    });
}

