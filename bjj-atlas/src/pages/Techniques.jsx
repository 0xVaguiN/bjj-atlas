//import { useState, useEffect } from "react";
import data from "../data/moves.json";
import { Link } from "react-router-dom";

export default function Techniques() {
  const user = JSON.parse(localStorage.getItem("user-bjj")) || { faixa: "branca" };
  const beltOrder = ["branca", "azul", "roxa", "marrom", "preta"];

  const techniques = data.length

  return (
    <div className="font-display p-5">
      <h1 className="font-semibold mt-3 text-2xl text-left">Arsenal de Técnicas</h1>
      <h3 className="mb-8 text-gray-600">
          Explore nossa coleção completa de técnicas de Jiu-Jitsu Brasileiro.
        </h3>
        <h6 className="mb-2 text-xs text-gray-600">Mostrando {techniques} técnicas</h6>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((m) => {
          const locked = beltOrder.indexOf(user.faixa) < beltOrder.indexOf(m.belt);
          return (
            <div key={m.id} className={`flex border-2 flex-col items-left pt-5 mb-8 mt-auto rounded-xl border-[#C6C6C6] card ${locked ? "locked" : ""}`}>
              <img src={m.image} alt={m.name_pt} className="w-72 h-50 object-fill rounded-t-xl mb-3" />
              <h3 className="pt-4 px-5 font-bold text-xl">{m.name_pt}</h3>
              <p>{m.description_pt}</p>
              {locked ? (
                <p className="py-2 px-15 mt-5 text-center text-white font-semibold border rounded-xl bg-[#777777]">🔒Bloqueado</p>
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
