//import { useState, useEffect } from "react";
import data from "../data/moves.json";
import { Link } from "react-router-dom";

export default function Techniques() {
  const user = JSON.parse(localStorage.getItem("user")) || { faixa: "branca" };
  const beltOrder = ["branca", "azul", "roxa", "marrom", "preta"];

  return (
    <div className="font-display p-5">
      <h1 className="font-semibold mt-3 text-2xl text-left">Arsenal de Técnicas</h1>
      <h3 className="mb-8 text-gray-600">
          Explore nossa coleção completa de técnicas de Jiu-Jitsu Brasileiro.
        </h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,2fr))] gap-8 ">
        {data.map((m) => {
          const locked = beltOrder.indexOf(user.faixa) < beltOrder.indexOf(m.belt);
          return (
            <div key={m.id} className={`flex border-2 flex-col items-center py-5 px-5 mt-auto rounded-3xl border-[#C6C6C6] card ${locked ? "locked" : ""}`}>
              <img src={m.image} alt={m.name_pt} className="w-full h-36 object-cover rounded-xl mb-3" />
              <h3>{m.name_pt}</h3>
              <p>Faixa mínima: {m.belt}</p>
              {locked ? (
                <p>🔒 Bloqueado</p>
              ) : (
                <Link className="py-2 px-17 mt-5 text-center text-white font-semibold border rounded-xl bg-[#d11e1eff]" to={`/techniques/${m.id}`}>Ver Técnica</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
