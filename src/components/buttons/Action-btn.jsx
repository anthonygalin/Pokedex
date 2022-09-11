import '../../App.scss'

function ActionBtn({name}) {

    return (
        <button className="action-btn">
            <div className="action-btn-bg-top"/>
            <div className="action-btn-bg-bottom"/>
            <p className="info">{name}</p>
        </button>
    )
}

export default ActionBtn