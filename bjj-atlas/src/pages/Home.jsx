import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 30, textAlign: 'center' }}>
      <h1>BJJ Atlas</h1>
      <p>Aprenda, evolua e domine o Jiu-Jitsu Brasileiro.</p>
      <div style={{ marginTop: 20 }}>
        <Link to="/register">
          <button>Criar Conta</button>
        </Link>
        <Link to="/techniques">
          <button style={{ marginLeft: 10 }}>Explorar Técnicas</button>
        </Link>
      </div>
    </div>
  );
}

