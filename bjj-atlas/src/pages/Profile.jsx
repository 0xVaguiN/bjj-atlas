export default function Profile() {
    const dados = JSON.parse(localStorage.getItem("user-bjj"))
    const userName = dados.nome
    const userBelt = dados.faixa

  return (
    <>
      <div className="relative h-full">
        <h1 className="font-semibold text-3xl">Olá, {userName}</h1>
        <span className="py-1 px-3 border rounded-3xl">Faixa {userBelt}</span>

        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-8 justify-center max-w-8xl">
            <div className="border-2 py-2 px-3 border-[#C6C6C6] rounded-2xl w-[270px] h-40 bg-red-50">
                <h1>a</h1>
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
