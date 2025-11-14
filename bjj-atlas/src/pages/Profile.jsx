import { text } from "@fortawesome/fontawesome-svg-core"

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
            <div className="border-2 py-2 px-3 border-[#C6C6C6] rounded-2xl w-[270px] h-40 bg-red-50">
                <h1>Técnias Aprendidas</h1>
                <h1>{learned.length}</h1>
            </div>
            <div className="border rounded-2xl w-[270px] h-40 bg-red-500"></div>
            <div className="border rounded-2xl w-[270px] h-40 bg-red-500"></div>
            <div className="border rounded-2xl w-[270px] h-40 bg-red-500"></div>

            <div className="border rounded-2xl w-[373px] h-40 bg-red-500"></div>
            <div className="border rounded-2xl w-[373px] h-40 bg-red-500"></div>
            <div className="border rounded-2xl w-[373px] h-40 bg-red-500"></div>
          </div>
        </div>
      </div>
    </>
  );
}
