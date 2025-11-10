import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ nome: '', email: '', idade: '', faixa: 'branca' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(form))
    alert('Cadastro feito!')
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" name="nome" onChange={handleChange} />
        <input placeholder="Email" name="email" onChange={handleChange} />
        <input placeholder="Idade" name="idade" onChange={handleChange} />
        <select name="faixa" onChange={handleChange}>
          <option>branca</option>
          <option>azul</option>
          <option>roxa</option>
          <option>marrom</option>
          <option>preta</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
