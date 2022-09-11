import '../../App.scss'

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
                                            className={`pokemon-name-container ${pokemon.name === pokeData.name ? 'active' : 'inactive'}`}>
                            <span className="pokemon-name w-min-50 text-align-right">
                                {newIndex}
                            </span>
                                    <h1 className="pokemon-name">
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

export default PokeList