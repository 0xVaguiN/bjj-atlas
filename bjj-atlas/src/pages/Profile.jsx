//import { text } from "@fortawesome/fontawesome-svg-core"

export default function Profile() {
    const dados = JSON.parse(localStorage.getItem("user-bjj"))
    const userName = dados.nome
    const userBelt = dados.faixa
    const learned = JSON.parse(localStorage.getItem("learnedList")) || [];


    let bgColor = "bg-white"
    let textColor = "text-black"


    if (userBelt === "azul") {
      bgColor = "bg-[#3535ff]"
      textColor = "text-white"
    }

    if (userBelt === "roxa") {
      bgColor = "bg-purple-800"
      textColor = "text-white"
    }

    if (userBelt === "marrom") {
      bgColor = "bg-amber-900"
      textColor = "text-white"
    }

    if (userBelt === "preta") {
      bgColor = "bg-black"
      textColor = "text-white"
    }

  return (
    <>
      <div className="relative px-10 py-2 h-full">
        <h1 className="font-semibold ml-2.5 my-3 text-3xl">Olá, {userName}</h1>
        <span className={`ml-2.5 py-1 px-3 ${bgColor} ${textColor} border rounded-3xl`}>Faixa {userBelt}</span>
        <div className="max-w-8xl flex justify-center">
          <div className="flex mt-10 flex-wrap gap-8 justify-center">
            <div className="border-2 py-4 px-5 border-[#C6C6C6] rounded-2xl w-[270px] h-40 bg-red-50">
                <h1 className="text-gray-500 text-lg">Técnicas Aprendidas</h1>
                <h1 className="font-bold text-4xl">{learned.length}</h1>
                <h1 className="text-gray-500 text-xs pt-5">Continue treinando para dominar mais técnicas! <a className="underline text-red-500" href="/techniques">Ver todas as técnicas</a></h1>
            </div>
            <div className="border-2 py-4 px-5 border-[#C6C6C6] rounded-2xl w-[270px] h-40 bg-red-50">
                <h1 className="text-gray-500 text-lg">Em progresso</h1>
                <h1 className="font-bold text-4xl">{learned.length}</h1>
                <h1 className="text-gray-500 text-xs pt-5">Técnicas que você ainda está aprendendo! <a className="underline text-red-500" href="/inprogress">Ver todas as técnicas em progresso</a></h1>
            </div>
            <div className="border-2 py-4 px-5 border-[#C6C6C6] rounded-2xl w-[270px] h-40 bg-red-50">
                <h1 className="text-gray-500 text-lg">Favoritas</h1>
                <h1 className="font-bold text-4xl">{learned.length}</h1>
                <h1 className="text-gray-500 text-xs pt-5">Salve suas técnicas favoritas para treinar depois! <a className="underline text-red-500" href="/favorites">Ver todas as favoritas</a></h1>
            </div>
            <div className="border-2 py-4 px-5 border-[#C6C6C6] rounded-2xl w-[270px] h-40 bg-red-50">
                <h1 className="text-gray-500 text-lg">Conquistas Desbloqueadas</h1>
                <h1 className="font-bold text-4xl">{learned.length}</h1>
                <h1 className="text-gray-500 text-xs pt-5">Continue treinando para ganhar mais conquistas! <a className="underline text-red-500" href="/achievements">Ver todas as conquistas</a></h1>
            </div>
            <div className="border rounded-2xl w-[373px] h-40 bg-red-500"></div>
            <div className="border rounded-2xl w-[373px] h-40 bg-red-500"></div>
            <div className="border rounded-2xl w-[373px] h-40 bg-red-500"></div>
          </div>
        </div>
      </div>
    </>
  );
}
