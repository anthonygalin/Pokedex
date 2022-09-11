import '../../App.scss'

function ActionBtn({name}) {

    return (
        <div className="action-btn-container">
            <button className="action-btn">
                <div className="action-btn-bg-top" />
                <div className="action-btn-bg-bottom" />
                <p className="info">{ name }</p>
            </button>
        </div>
    )
}

export default ActionBtn