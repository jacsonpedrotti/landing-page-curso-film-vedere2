import React from 'react'

const PRESENTIAL_MESSAGE = encodeURIComponent('Olá, tenho interesse no seu curso PRESENCIAL, poderia me informar mais sobre o conteúdo?')
const PRESENTIAL_WHATS_URL = `https://api.whatsapp.com/send/?phone=5548996999796&text=${PRESENTIAL_MESSAGE}`

function PresentialCourse() {
  return (
    <section className="presential-course">
      <div className="container">
        <div className="presential-card">
          <div className="presential-content">
            <h2>Curso Presencial Completo</h2>
            <p>
              Quer uma experiência ainda mais completa? Nosso curso presencial oferece 
              prática direta e acompanhamento personalizado.
            </p>
            <ul className="presential-features">
              <li>🎯 Prática hands-on com veículos reais</li>
              <li>👨‍🏫 Acompanhamento individual do instrutor</li>
              <li>💰 Precificação e atendimento ao cliente</li>
              <li>🛠️ Ferramentas e materiais inclusos</li>
            </ul>
            <a 
              href={PRESENTIAL_WHATS_URL}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> Quero saber mais sobre o presencial
            </a>
          </div>
        </div>
        <div className="presential-logo">
          <img src="/assets/logo-vedere-50x50.png" alt="Vedere Films" />
        </div>
      </div>
    </section>
  )
}

export default PresentialCourse
