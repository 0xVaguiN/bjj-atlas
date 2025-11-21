//import { useState, useEffect } from "react";
import data from "../data/moves.json";
import { Link } from "react-router-dom";

export default function Techniques() {
  const user = JSON.parse(localStorage.getItem("user-bjj")) || {
    faixa: "branca",
  };
  const beltOrder = ["branca", "azul", "roxa", "marrom", "preta"];

  const techniques = data.length;

  return (
    <div className="font-display p-5">
      <h1 className="font-semibold mt-3 text-2xl text-left">
        Arsenal de Técnicas
      </h1>
      <h3 className="mb-8 text-gray-600">
        Explore nossa coleção completa de técnicas de Jiu-Jitsu Brasileiro.
      </h3>
      <h6 className="mb-2 text-xs text-gray-600">
        Mostrando {techniques} técnicas
      </h6>

      {/* AQUI ENTRA O NOVO GRID DOS CARDS */}
      <div className="flex flex-wrap justify-center mt-1 gap-10 px-2">
        {data.map((m) => {
          const locked =
            beltOrder.indexOf(user.faixa) < beltOrder.indexOf(m.belt);

          return (
            <div
              key={m.id}
              className={`max-w-[330px] w-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                locked ? "opacity-70" : ""
              }`}
            >
              {/* Imagem */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name_pt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-xl mb-1">{m.name_pt}</h3>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {m.description_pt}
                </p>

                {locked ? (
                  <button
                    disabled
                    className="w-full py-2 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed"
                  >
                    🔒 Bloqueado
                  </button>
                ) : (
                  <Link
                    to={`/techniques/${m.id}`}
                    className="w-full block text-center py-2 bg-red-600 hover:bg-red-700 transition-all text-white font-semibold rounded-xl"
                  >
                    Ver Técnica
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
