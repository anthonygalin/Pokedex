import '../../App.scss'
import ActionBtn from "../buttons/Action-btn.jsx";

function Footer({onShowModal}) {

    return (
        <section className="footer-container">
            <ActionBtn onShowModal={onShowModal}  name="SEARCH"/>
            <ActionBtn name="FILTER"/>
            <ActionBtn name="(GEN)"/>
            <ActionBtn name="HELP"/>
        </section>
    )
}

export default Footer