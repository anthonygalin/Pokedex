import '../App.scss'
import {useState, useEffect} from "react";
import HeaderMain from "../components/header/HeaderMain.jsx";
import Pokemon from "../components/main/Pokemon.jsx";
import InfoBtn from "../components/buttons/Info-btn.jsx";
import PokeList from "../components/main/Poke-list.jsx";
import Footer from "../components/footer/Footer.jsx";
import {getPokemons} from "../utils/getPetitions.js";
import axios from "axios";

function App() {
    //States
    let [active, setActive] = useState(null);
    let [changeSh, setChangeSh] = useState(null);
    let [pokemons, setPokemons] = useState([]);
    let [pokeData, setPokeData] = useState(null);
    let [sprite, setSprite] = useState(null);
    let [spriteSh, setSpriteSh] = useState(null);


    useEffect(() => {
        //Get all pokemons.
        getPokemons().then((r) => {
            let data = r.results;
            setPokemons(pokemons = data);
        }).catch(() => alert('Error al obtener los datos de los Pokemons.'));
        //Feetch with the first pokemon if not exist.
        if (!pokeData) {
            axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((r) => {
                setPokeData(pokeData = r.data);
                setSprite(sprite = r.data.sprites.versions["generation-v"]["black-white"].animated.front_default);
                setSpriteSh(spriteSh = r.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny);
                setChangeSh(changeSh = sprite)
            });
        }
    }, []);
    //Fetch with selected pokemon
    const select = (pokemon) => {
        axios.get(pokemon.url).then((r) => {
            setPokeData(pokeData = r.data);
            setSprite(sprite = r.data.sprites.versions["generation-v"]["black-white"].animated.front_default);
            setSpriteSh(spriteSh = r.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny);
            setChangeSh(changeSh = sprite);
        })
    }
    //Change pokemon to shyni version
    const onChangeSh = () => {
        if(!active) {
            setActive(active = true)
            return setChangeSh(changeSh = spriteSh);
        }
        if(active) {
            setActive(active = null);
            setChangeSh(changeSh = sprite);
        }
    }

    return (
        <section className="App">
            <HeaderMain/>
            <main className="container">
                <Pokemon changeSh={changeSh} onChangeSh={onChangeSh}/>
                <InfoBtn/>
                <PokeList pokemons={pokemons} select={select} pokeData={pokeData}/>
                <Footer/>
            </main>
        </section>
    )
}

export default App
