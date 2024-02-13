import "../styles/main.scss";

import { Link } from "react-router-dom";

export const Nav = () => {
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