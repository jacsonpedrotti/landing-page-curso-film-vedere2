import React from 'react'

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Perguntas frequentes</h2>
        <details className="faq-item">
          <summary><span className="q-icon">💻</span> O curso é 100% online?</summary>
          <p>Sim, acesso imediato e vitalício às aulas gravadas, de qualquer dispositivo.</p>
        </details>
        <details className="faq-item">
          <summary><span className="q-icon">🎯</span> Preciso de experiência prévia?</summary>
          <p>Não. Começamos do zero e avançamos até técnicas profissionais com aplicações reais.</p>
        </details>
        <details className="faq-item">
          <summary><span className="q-icon">🤝</span> Tenho suporte para dúvidas?</summary>
          <p>Sim! Oferecemos suporte completo para esclarecer todas as suas dúvidas durante o curso.</p>
        </details>
        <details className="faq-item">
          <summary><span className="q-icon">💳</span> Quais formas de pagamento?</summary>
          <p>Cartão de crédito, Pix e boleto (conforme plataforma de pagamento disponível).</p>
        </details>
        <details className="faq-item">
          <summary><span className="q-icon">🚀</span> Quando posso começar?</summary>
          <p>Assim que a compra é confirmada, o acesso é liberado imediatamente.</p>
        </details>
      </div>
    </section>
  )
}

export default FAQ


