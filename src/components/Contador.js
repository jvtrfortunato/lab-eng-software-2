import React from "react";

export default function Contador({ imgSrc, alt, onAdicionar, onRemover }) {
  return (
    <div className="contador">
      <img src={imgSrc} alt={alt} />
      <button className="btn-remove" onClick={onRemover}>-</button>
      <button className="btn-add" onClick={onAdicionar}>+</button>
    </div>
  );
}
