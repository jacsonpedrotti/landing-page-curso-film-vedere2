import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || 'https://pay.hotmart.com/N101809353Q?checkoutMode=2&off=lnqqh9tv'

function CourseCard() {
  return (
    <section className="online-course">
      <div className="container">
        <div className="online-card">
          <div className="online-content">
            <h2>Curso Online Completo</h2>
            <p>
              Aprenda aplicação de películas automotivas do zero ao avançado, 
              com acesso vitalício e suporte completo para suas dúvidas.
            </p>
            <ul className="online-features">
              <li>🎓 Acesso vitalício às aulas</li>
              <li>📱 Estude de qualquer dispositivo</li>
              <li>🤝 Suporte para dúvidas</li>
              <li>📁 Materiais para download</li>
            </ul>
            <div className="online-price">
              <span className="label">Por apenas</span>
              <span className="amount">R$ 297,00</span>
            </div>
            <a 
              href={PAYMENT_URL}
              className="btn btn-primary btn-lg hotmart-fb hotmart__button-checkout"
            >
              Comprar agora!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseCard




