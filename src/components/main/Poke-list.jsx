import '../../App.scss'
import pokeball from '../../assets/icons/pokeball.png'

function PokeList({pokemons, select, pokeData}) {

    return (
        <section className="pokeList poke-list-container">
            <div className="poke-list-bg"/>
            {pokemons &&
                <div className="list-name-container">
                    {
                        pokemons.map((pokemon, index) => {
                            if (pokeData) {
                                const newIndex = index + 1;
                                return <div onClick={() => {
                                    select(pokemon)
                                }} key={index}
                                            className={`pokemon-name-container ${ pokemon.name === pokeData.name ? 'bg-pink-transparent' : '' }`}>
                                    {
                                        pokemon.name === pokeData.name ?
                                                <img className="pokeball-icon active" src={pokeball} alt="P"/> :
                                                <div className="inactive"></div>
                                    }
                                    <span className="pokemon-name-list w-min-50 text-align-right pl-2">
                                {newIndex < 10 ? '00' + newIndex : newIndex && newIndex >= 10 && newIndex <= 99 ? '0' + newIndex : newIndex}
                            </span>
                                    <h1 className="pokemon-name-list">
                                        {pokemon.name}
                                    </h1>
                                </div>
                            }
                        })
                    }
                </div>
            }
        </section>
    )
}

// ${pokemon.name === pokeData.name ? 'active' : 'inactive'}
export default PokeList