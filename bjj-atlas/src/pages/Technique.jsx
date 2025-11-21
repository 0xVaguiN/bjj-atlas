import { useParams } from "react-router-dom";
import data from "../data/moves.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'


export default function Technique() {
  const { id } = useParams();
  const move = data.find((m) => m.id == id);

  let bgColor = "bg-white"
  let textColor = "text-black"

  if (move.belt === "branca") {
    bgColor = "bg-white"
    textColor = "text-black"
  }

  if (move.belt === "azul") {
    bgColor = "bg-[#3535ff]"
    textColor = "text-white"
  }

  if (move.belt === "roxa") {
    bgColor = "bg-purple-800"
    textColor = "text-white"
  }

  if (move.belt === "marrom") {
    bgColor = "bg-amber-900"
    textColor = "text-white"
  }

  if (move.belt === "preta") {
    bgColor = "bg-black"
    textColor = "text-white"
  }

  const [learnedList, setLearnedList] = useState(() => {
    return JSON.parse(localStorage.getItem("learnedList") || "[]");
  });

  const [favoriteList, setFavoriteList] = useState(() => {
    return JSON.parse(localStorage.getItem("favoriteList") || "[]");
  });

  const alreadyLearned = learnedList.includes(id);

  const favorited = favoriteList.includes(id);

  function favorite() {
    if (favorited) return;

    const updatedListFav = [...favoriteList, id];

    setLearnedList(updatedListFav);
    localStorage.setItem("favoriteList", JSON.stringify(updatedListFav));
  }

  function learn() {
    if (alreadyLearned) return; // evita clique extra

    const updatedList = [...learnedList, id];

    setLearnedList(updatedList);
    localStorage.setItem("learnedList", JSON.stringify(updatedList));
  }

  return (
    <div className="flex flex-col items-center text-left p-2 font-display">
      <div className="flex w-[90%] flex-col px-10 py-10">
        <Link className="w-fit px-0.5 py-0.5 mb-8 hover:-translate-x-2 transition-all duration-150 ease-in-out" to="/techniques"><FontAwesomeIcon icon={faAngleDoubleLeft} /> Voltar para técnicas</Link>
        <iframe
          className="w-full h-[450px] rounded-2xl"
          src={move.video}
          title={move.name_pt}
          allowFullScreen
        ></iframe>
        <div className="flex flex-row justify-between">
          <h2 className="pt-10 text-3xl font-semibold">{move.name_pt}</h2>
          <button onClick={favorite} className={`border-2 mt-9 transition-all duration-200 ease-in-out text-center text-xl px-2 py-2 w-fit rounded-lg border-[#C6C6C6] bg-red-50 hover:scale-90 ${favorited ? "bg-red-500 cursor-not-allowed" : "bg-red-50 text-red cursor-pointer"}`}><FontAwesomeIcon icon={faHeart} /></button>
        </div>
        <span className={`border-2 text-xs font-semibold border-[#C6C6C6] ${textColor} ${bgColor} w-fit px-4 py-1 rounded-full`}>Faixa {move.belt}</span>
      </div>
      <div className="flex w-[83%] flex-col px-10 py-10 rounded-2xl border-2 border-[#C6C6C6] bg-red-50">
        <h2 className="text-3xl font-semibold">Status</h2>
        <button
          onClick={learn}
          disabled={alreadyLearned}
          className={`font-semibold w-fit py-1 px-3 mt-5 rounded-md
          ${alreadyLearned ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 text-white cursor-pointer"}`}
        >
          {alreadyLearned ? "Já Aprendida ✔" : "Aprendida!"}
        </button>
      </div>

      <div className="flex w-[83%] flex-col mt-10 px-10 py-8 rounded-2xl border-2 border-[#C6C6C6] bg-red-50">
        <p className="font-semibold text-2xl text-left">Descrição</p>
        <p className="py-2 text-justify">{move.description_pt}</p>
      </div>

      <div className="flex w-[83%] flex-col my-10 px-10 py-8 rounded-2xl border-2 border-[#C6C6C6] bg-red-50">
        <p className="font-semibold text-2xl text-left">Instruções Passo a Passo</p>

        <div className="mt-4 flex justify-center flex-col gap-4">
          {move.steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 w-9 h-9 rounded-full bg-red-600 text-white font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="py-1.5 text-gray-800">
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
