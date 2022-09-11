import '../../../App.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

function Pokemon({changeSh, onChangeSh, active}) {


    return (
        <section className="pokemon-container">
            {changeSh &&
                <img className="pokemon" src={changeSh} alt=""/>
            }
            <button onClick={() => {
                onChangeSh()
            }} className="shinny-btn"><FontAwesomeIcon className={active ? 'shinny' : 'no-shinny'} icon={faSun}/>
            </button>
        </section>
    )
}

export default Pokemon