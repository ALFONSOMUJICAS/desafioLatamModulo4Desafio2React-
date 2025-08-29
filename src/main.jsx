/**
 * Fecha: 2025-08-18 20:30:23
 * Descripción: Punto de entrada de React (monta la app en el DOM).
 * Funcionalidad: Renderiza <App /> dentro del elemento root.
 * Conecta: Importa estilos globales (styles.css) y <App />.
 * Notas: Solo comentarios añadidos.
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
