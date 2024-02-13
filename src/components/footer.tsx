import { Link } from "react-router-dom";
import "../styles/main.scss";

export const Footer = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Hem</Link>
                </li>

                <li>
                    <Link to="/#">Boka Bord</Link>
                </li>

                <li>
                    <Link to="/contact">Kontakta Oss</Link>
                </li>
            </ul>
        </nav>
    );

};