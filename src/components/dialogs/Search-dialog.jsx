import '../../App.scss'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SearchDialog({showModal}) {

    return (
    <section className="dialog-container">
        { showModal === true &&
            <section className="dialog-content">
                <div className="info-input">
                    <input type="text" className="input-text" placeholder="Search Pokemon"></input>
                    <button className="search-icon-container">
                        <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                    </button>
                </div>
            </section>
        }
    </section>
    )
}

export default SearchDialog