import '../App.scss'
import HeaderMain from "../components/header/HeaderMain.jsx";
import Pokemon from "../components/main/Pokemon.jsx";
import InfoBtn from "../components/buttons/Info-btn.jsx";
import PokeList from "../components/main/Poke-list.jsx";
import Footer from "../components/footer/Footer.jsx";

function App() {

  return (
    <section className="App">
        <HeaderMain/>
        <main className="container">
            <Pokemon/>
            <InfoBtn/>
            <PokeList/>
            <Footer/>
        </main>
    </section>
  )
}

export default App
