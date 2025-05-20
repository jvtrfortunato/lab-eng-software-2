import React from "react";
import Contador from "./Contador";
import homemIcon from "../img/homem.png";
import mulherIcon from "../img/mulher.png";

export default function Contadores({ homens, setHomens, mulheres, setMulheres }) {
  return (
    <>
      <Contador
        imgSrc={homemIcon}
        alt="Ícone de Homem"
        onAdicionar={() => setHomens(homens + 1)}
        onRemover={() => setHomens(Math.max(0, homens - 1))}
      />
      <Contador
        imgSrc={mulherIcon}
        alt="Ícone de Mulher"
        onAdicionar={() => setMulheres(mulheres + 1)}
        onRemover={() => setMulheres(Math.max(0, mulheres - 1))}
      />
    </>
  );
}
