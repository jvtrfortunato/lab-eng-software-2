import { useEffect, useState } from 'react';
import './Relogio.css';

export default function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  const horaFormatada = horaAtual.toLocaleTimeString();

  return (
    <div className="relogio">
      <h2>{horaFormatada}</h2>
    </div>
  );
}
