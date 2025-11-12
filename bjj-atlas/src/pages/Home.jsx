import { Link, Links } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center font-display text-white">
        {/* Imagem de fundo */}
        <img
          src="https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=1920&h=1080&fit=crop"
          alt="Treino de Jiu-Jitsu"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradiente por cima da imagem */}
        <div className="absolute inset-0 bg-linear-to-b from-red-700/80 to-red-900/50"></div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 px-4">
          <span className="text-sm bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
            Bem-vindo(a) ao BJJ Atlas
          </span>

          <h1 className="text-6xl font-extrabold mt-4">
            Aprenda, Evolua e Domine o <br />
            <span className="text-red-400">Jiu-Jitsu Brasileiro</span> com o{" "}
            <br />
            BJJ Atlas
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-gray-50">
            Técnicas organizadas por faixa, vídeos detalhados e uma jornada
            completa para todos os níveis.
          </p>

          <div className="mt-8 flex justify-center gap-10">
            <Link to="/register">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition">
                Criar Conta Grátis
              </button>
            </Link>
            <Link to="/techniques">
              <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-2 rounded-md cursor-pointer transition">
                Explorar Técnicas
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative h-screen flex justify-center font-display text-center">
        <div className="relative z-10 px-4 py-25">
          <span className="text-sm font-bold text-red-600 bg-red-500/20 px-5 py-2 rounded-full backdrop-blur-sm">
            COMO FUNCIONA
          </span>
          <h1 className="text-6xl text-gray-900 font-bold mt-15">
            Sua Jornada no Jiu-Jitsu
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
            Três passos simples para começar a evoluir suas habilidades
          </p>
        </div>
        <div>
          <div>
            <h1>card</h1>
          </div>
        </div>
      </section>
    </>
  );
}
