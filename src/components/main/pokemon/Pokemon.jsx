import '../../../App.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

function Pokemon({changeSh, onChangeSh, active, loader, setLoader}) {

    return (
        <section className="pokemon-container">
            <div className={`${loader} lds`}/>
            {changeSh &&
               <img className="pokemon" src={changeSh} onLoad={() => setLoader( loader = 'display-none')} alt="pokemon"/>
            }
            <button onClick={() => {
                onChangeSh()
            }} className="shinny-btn"><FontAwesomeIcon className={active ? 'shinny' : 'no-shinny'} icon={faSun}/>
            </button>
        </section>
    )
}

export default Pokemon