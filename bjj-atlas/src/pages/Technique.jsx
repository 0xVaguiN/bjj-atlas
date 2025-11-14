import { useParams } from "react-router-dom";
import data from "../data/moves.json";
import { useState, useEffect } from "react";

export default function Technique() {
  const { id } = useParams();
  const move = data.find((m) => m.id == id);

  // Lista de técnicas aprendidas
  const [learnedList, setLearnedList] = useState(() => {
    return JSON.parse(localStorage.getItem("learnedList") || "[]");
  });

  // A técnica atual já foi aprendida?
  const alreadyLearned = learnedList.includes(id);

  function learn() {
    if (alreadyLearned) return; // evita clique extra
    
    const updatedList = [...learnedList, id];

    setLearnedList(updatedList);
    localStorage.setItem("learnedList", JSON.stringify(updatedList));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{move.name_pt}</h2>

      <iframe
        width="100%"
        height="315"
        src={move.video}
        title={move.name_pt}
        allowFullScreen
      ></iframe>

      <p>{move.description_pt}</p>

      <ul>
        {move.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <button
        onClick={learn}
        disabled={alreadyLearned}
        className={`font-semibold py-1 px-3 mt-5 rounded-md cursor-pointer 
          ${alreadyLearned ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 text-white"}`}
      >
        {alreadyLearned ? "Já Aprendida ✔" : "Aprendida!"}
      </button>
    </div>
  );
}
