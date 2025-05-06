import { useEffect, useState } from 'react';
import './Letreiro.css';

export default function Letreiro() {
  const texto = "Conheça a Fatec";
  const [index, setIndex] = useState(0);
  const [textoExibido, setTextoExibido] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoExibido(texto.slice(0, index + 1));
      setIndex((prevIndex) => {
        if (prevIndex === texto.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 200); // Velocidade de digitação

    return () => clearInterval(intervalo);
  }, [index]);

  return (
    <div className="letreiro">
      <h1>{textoExibido}</h1>
      <br></br>
    </div>
  );
}
