import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Relógio</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/AtvUi">Descrevendo a UI</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Home
