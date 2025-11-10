import { useParams } from "react-router-dom";
import data from "../data/moves.json";

export default function Technique() {
  const { id } = useParams();
  const move = data.find((m) => m.id == id);

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
    </div>
  );
}
