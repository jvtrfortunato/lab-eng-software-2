import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Aula 8 - Relógio</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Aula 8 - Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Aula 9 - Contador de Pessoas</Link>
                    </li>
                    <li>
                        <Link to="/AtvUi">Aula 10 - Componentes</Link>
                    </li>
                    <li>
                        <Link to="/AtvInteratividade">Aula 11 - Interatividade</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Home
