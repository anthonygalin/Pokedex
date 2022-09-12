import '../../../App.scss'

function Name({ pokeData }) {

    return (
        <section className="info-container align-self-end">
            {pokeData &&
                <div className="info-btn text-align-center"><h1 className="pokemon-name">{pokeData.name}</h1></div>
            }
        </section>
    )
}

export default Name