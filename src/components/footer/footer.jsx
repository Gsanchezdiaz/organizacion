import "./footer.css";
const Footer = () => {
    return (
        <section
            className="footer"
            style={{ backgroundImage: "url(./img/footer.png)" }}
        >
            <div className="redes">
                <a href="#">
                    <img src="./img/facebook.png" alt="Facebook" />
                </a>
                <a href="#">
                    <img src="./img/twitter.png" alt="Twitter" />
                </a>
                <a href="#">
                    <img src="./img/Instagram.png" alt="Instagram" />
                </a>
            </div>
            <img src="./img/logo.png" alt="Logo" />
            <strong>Desarrollado por Gerson Sanchez</strong>
        </section>
    );
};

export default Footer;
