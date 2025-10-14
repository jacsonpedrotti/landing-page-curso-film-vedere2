import React from 'react'

function Features() {
  return (
    <section id="beneficios" className="features">
      <div className="container">
        <h2 className="section-title">Competências desenvolvidas</h2>
        <ul className="features-grid nice-cards">
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">🛠️</div>
            <h3>Instalação automotiva</h3>
            <p>Procedimentos de corte, encolhimento e aplicação com acabamento consistente.</p>
          </li>
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">🧩</div>
            <h3>Aplicação sem desmontagem</h3>
            <p>Métodos práticos para evitar remoção de forros e acabamentos.</p>
          </li>
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">⚡</div>
            <h3>Eficiência operacional</h3>
            <p>Fluxos de trabalho que reduzem retrabalho e aumentam produtividade.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features


