import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [form, setForm] = useState({ nome: '', email: '', idade: '', faixa: 'branca' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleClick() {
    Navigate('/techniques')
  }

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(form))
    alert('Cadastro feito com sucesso!')
    setForm({ nome: '', email: '', idade: '', faixa: 'branca' }) // limpa o formulário
  }

  return (
    <div className='flex items-center justify-start flex-col pt-20 min-h-screen'>
      <div className='flex flex-col items-center bg-[#FFFAFA] py-10 px-10 border rounded-3xl'>
        <h2 className=' font-semibold text-gray-800 text-2xl'>Comece sua jornada!</h2>
        <h3 className='mb-8 text-gray-600'>Crie uma conta agora e comece a treinar!</h3>
        <form className='flex justify-center flex-col w-70 ' onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" "
              value={form.nome}
              onChange={handleChange}
              className="peer  w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:outline-none"
            />
            <label
              htmlFor="nome"
              className="absolute left-3 top-20 -translate-y-2/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
            >
              Nome
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-20 -translate-y-2/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
            >
              E-mail
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="number"
              id="idade"
              name="idade"
              placeholder=" "
              value={form.idade}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:outline-none"
            />
            <label
              htmlFor="idade"
              className="absolute left-3 top-20 -translate-y-2/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
            >
              Idade
            </label>
          </div>
          <div className='relative w-full'>
            <select
              id="faixa"
              name="faixa"
              className="
              peer block w-full mb-8 appearance-none border-2 border-gray-300 rounded-xl bg-transparent
              px-3 py-2.5 text-gray-900 focus:border-[#d11e1eff] focus:outline-none
              "
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option value="branca">Branca</option>
              <option value="azul">Azul</option>
              <option value="roxa">Roxa</option>
              <option value="marrom">Marrom</option>
              <option value="preta">Preta</option>
            </select>

            <label
              htmlFor="faixa"
              className="
                absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all
                duration-200 ease-in-out
                peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
                peer-not-placeholder-shown:top-5.5 peer-not-placeholder-shown:-translate-y-1/2
                peer-not-placeholder-shown:text-base er-not-placeholder-shown:text-gray-700
              "
            >
              Faixa
            </label>
          </div>
          <button
            type="submit"
            className='p-2.5 mb-2.5 rounded-xl font-medium text-md text-white bg-[#d11e1eff]'
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
