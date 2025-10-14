import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || 'https://pay.hotmart.com/N101809353Q?checkoutMode=2&off=lnqqh9tv'

function AlertHeader() {
  return (
    <div className="alert-header" aria-label="Informativo">
      <div className="container alert-inner">
        <div className="marquee" tabIndex="0" aria-label="Alerta: Preço promocional por tempo limitado, garanta já sua vaga!">
          <div className="marquee-track alert-marquee">
            <span>Preço promocional por tempo limitado, garanta já sua vaga!</span>
          </div>
        </div>
        <a href={PAYMENT_URL} className="btn btn-primary alert-cta hotmart-fb hotmart__button-checkout">Inscreva-se</a>
      </div>
    </div>
  )
}

export default AlertHeader


