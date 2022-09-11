import '../../App.scss'
import ActionBtn from "../buttons/Action-btn.jsx";

function Footer() {

    return (
        <section className="footer-container">
            <ActionBtn name="SEARCH"/>
            <ActionBtn name="FILTER"/>
            <ActionBtn name="(GEN)"/>
            <ActionBtn name="HELP"/>
        </section>
    )
}

export default Footer