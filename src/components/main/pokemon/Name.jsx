import '../../../App.scss'

function Name({ pokeData }) {

    return (
        <section className="info-btn-container align-self-end">
            <button className="info-btn"><h1 className="pokemon-name">{ pokeData.name }</h1></button>
        </section>
    )
}

export default Name