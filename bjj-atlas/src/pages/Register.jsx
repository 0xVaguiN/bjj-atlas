import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ nome: '', email: '', idade: '', faixa: 'branca' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(form))
    alert('Cadastro feito com sucesso!')
    setForm({ nome: '', email: '', idade: '', faixa: 'branca' }) // limpa o formulário
  }

  return (
    <div className='flex items-center justify-start flex-col pt-20 min-h-screen'>
      <div></div>
      <h2>Cadastro</h2>
      <form className='flex flex-col w-70' onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          style={{ padding: 10, marginBottom: 10, borderRadius: '0.5rem', border: '1px solid black' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: 10, marginBottom: 10, borderRadius: '0.5rem', border: '1px solid black' }}
        />
        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={form.idade}
          onChange={handleChange}
          style={{ padding: 10, marginBottom: 10, borderRadius: '0.5rem', border: '1px solid black' }}
        />
        <select
          name="faixa"
          value={form.faixa}
          onChange={handleChange}
          style={{ padding: 10, marginBottom: 10, borderRadius: '0.5rem', border: '1px solid black' }}
        >
          <option value="branca">branca</option>
          <option value="azul">azul</option>
          <option value="roxa">roxa</option>
          <option value="marrom">marrom</option>
          <option value="preta">preta</option>
        </select>
        <button
          type="submit"
          style={{
            padding: 10,
            marginBottom: 10,
            borderRadius: '0.5rem',
            border: '1px solid black',
            background: '#d11e1eff',
            color: 'white'
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
