//import { useState, useEffect } from "react";
import data from "../data/moves.json";
import { Link } from "react-router-dom";

export default function Techniques() {
  const user = JSON.parse(localStorage.getItem("user")) || { faixa: "branca" };
  const beltOrder = ["branca", "azul", "roxa", "marrom", "preta"];

  return (
    <div className="p-5">
      <h2>Técnicas</h2>
      <div className="grid grid-cols-[autofill_minmax(200px,1fr)] gap-5 ">
        {data.map((m) => {
          const locked = beltOrder.indexOf(user.faixa) < beltOrder.indexOf(m.belt);
          return (
            <div key={m.id} className={`card ${locked ? "locked" : ""}`}>
              <img src={m.image} alt={m.name_pt} width="100%" />
              <h3>{m.name_pt}</h3>
              <p>Faixa mínima: {m.belt}</p>
              {locked ? (
                <p>🔒 Bloqueado</p>
              ) : (
                <Link to={`/techniques/${m.id}`}>Ver Técnica</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
