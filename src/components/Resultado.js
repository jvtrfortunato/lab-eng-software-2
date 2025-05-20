import React from "react";

export default function Resultado({ label, valor }) {
  return <p className="resultado">{label}: {valor}</p>;
}
