import React from "react";
import Resultado from "./Resultado";

export default function Resultados({ homens, mulheres }) {
  return (
    <>
      <Resultado label="Homens" valor={homens} />
      <Resultado label="Mulheres" valor={mulheres} />
      <Resultado label="Total" valor={homens + mulheres} />
    </>
  );
}
