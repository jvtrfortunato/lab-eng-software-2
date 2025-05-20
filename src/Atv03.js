import React, { useState } from "react";
import "./contador.css";
import Contadores from "./components/Contadores";
import Resultados from "./components/Resultados";
import BotaoReset from "./components/BotaoReset";

export default function Atv03() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="body">
        <div className="container">
        <h2>Contador de Pessoas</h2>

        <Contadores
            homens={homens}
            setHomens={setHomens}
            mulheres={mulheres}
            setMulheres={setMulheres}
        />

        <Resultados homens={homens} mulheres={mulheres} />

        <BotaoReset resetar={resetar} />
        </div>
    </div>
  );
}
