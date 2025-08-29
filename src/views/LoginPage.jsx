import React, { useState } from 'react';

/**
 * LoginPage
 * - Email, Password
 * - Validaciones mínimas + required en inputs
 */
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null) // { type: 'success' | 'danger', text: string }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailTrim = (email || '').trim()
    const passwordTrim = (password || '').trim()

    if (!emailTrim || !passwordTrim) {
      setMessage({ type: 'danger', text: 'Todos los campos son obligatorios.' })
      return
    }
    if (passwordTrim.length < 6) {
      setMessage({ type: 'danger', text: 'La contraseña debe tener al menos 6 caracteres.' })
      return
    }
    setMessage({ type: 'success', text: 'Inicio de sesión exitoso.' })
  }

  return (
    <div className="container my-5" style={{ maxWidth: 480 }}>
      <h2 className="mb-4 text-center">Login</h2>
      {message && <div className={`alert alert-${message.type}`} role="alert">{message.text}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="logEmail" className="form-label">Email</label>
          <input
            id="logEmail"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="logPass" className="form-label">Contraseña</label>
          <input
            id="logPass"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
            minLength={6}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  )
}

export default LoginPage
