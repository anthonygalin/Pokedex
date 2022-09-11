import '../../App.scss'

function Pokemon({ changeSh, onChangeSh }) {



    return (
        <section className="pokemon-container">
            {changeSh &&
                <img className="pokemon" src={changeSh} alt=""/>
            }
                <button onClick={() =>{onChangeSh()}} className="shinny">shinny</button>
        </section>
    )
}

export default Pokemon