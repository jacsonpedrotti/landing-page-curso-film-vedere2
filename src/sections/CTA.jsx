import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || 'https://pay.hotmart.com/N101809353Q?checkoutMode=2&off=lnqqh9tv'

function CTA() {
  return (
    <section id="inscricao" className="cta">
      <div className="container cta-inner">
        <h2>Pronto para começar?</h2>
        <p>Aproveite o preço promocional por tempo limitado.</p>
        <a className="btn btn-primary btn-lg hotmart-fb hotmart__button-checkout" href={PAYMENT_URL}>Inscreva-se agora</a>
      </div>
    </section>
  )
}

export default CTA








