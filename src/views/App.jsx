import '../App.scss'
import {useState, useEffect} from "react";
import HeaderMain from "../components/header/HeaderMain.jsx";
import Pokemon from "../components/main/pokemon/Pokemon.jsx";
import InfoBtn from "../components/buttons/Info-btn.jsx";
import PokeList from "../components/main/Poke-list.jsx";
import Footer from "../components/footer/Footer.jsx";
import {getPokemons} from "../utils/getPetitions.js";
import axios from "axios";
import Name from "../components/main/pokemon/Name.jsx";

function App() {
    //States
    let [active, setActive] = useState(null);
    let [changeSh, setChangeSh] = useState(null);
    let [loader, setLoader] = useState('display-block');
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
                setChangeSh(changeSh = sprite);
                setActive(active = null);
            });
        }
    }, []);
    //Fetch with selected pokemon
    const select = (pokemon) => {
        setLoader(loader = 'display-block');
        setChangeSh(changeSh = null);
        axios.get(pokemon.url).then((r) => {
            setPokeData(pokeData = r.data);
            setSprite(sprite = r.data.sprites.versions["generation-v"]["black-white"].animated.front_default);
            setSpriteSh(spriteSh = r.data.sprites.versions["generation-v"]["black-white"].animated.front_shiny);
            setChangeSh(changeSh = sprite);
            setActive(active = null);
        })
    }
    //Change pokemon to shyni version
    const onChangeSh = () => {
        if (!active) {
            setActive(active = true)
            return setChangeSh(changeSh = spriteSh);
        }
        if (active) {
            setActive(active = null);
            return setChangeSh(changeSh = sprite);
        }
    }

    return (
        <section className="App">
            <HeaderMain/>
            <main className="container">
                <section className="pokemon-card-container">
                    <Name pokeData={ pokeData }/>
                    <Pokemon changeSh={changeSh} onChangeSh={onChangeSh} active={active} loader={loader} setLoader={setLoader} setChangeSh={setChangeSh}/>
                    <InfoBtn/>
                </section>
                <PokeList pokemons={pokemons} select={select} pokeData={pokeData}/>
                <Footer/>
            </main>
        </section>
    )
}

export default App
