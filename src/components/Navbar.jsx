/**
 * Fecha: 2025-08-18 20:30:23
 * Descripción: Barra de navegación con Bootstrap.
 * Funcionalidad: Muestra opciones de menú (Home, Total) y, según 'token', alterna entre Profile/Logout o Login/Register.
 * Conecta: Se usa en <App />.
 * Notas: Solo comentarios añadidos; no se alteró la UI ni la lógica.
 */
import React from "react";
function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            🍕 Mamma Mía
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMain"
            aria-controls="navMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMain">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
              <li className="nav-item">
                <a className="btn btn-outline-light" href="#home">
                  🍕 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light fw-semibold" href="#total">
                  🛒 Total: ${total.toLocaleString("es-CL")}
                </a>
              </li>

              {token ? (
                <>
                  <li className="nav-item">
                    <a className="btn btn-outline-light" href="#profile">
                      🔓 Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-light" href="#logout">
                      🔒 Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="btn btn-outline-light" href="#login">
                      🔐 Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-light" href="#register">
                      🔐 Register
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
