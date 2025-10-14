import React from 'react'

const MESSAGE = encodeURIComponent('Olá, tenho dúvidas sobre o Curso aplicação de Películas, poderia me ajudar?')
const WHATS_URL = `https://api.whatsapp.com/send/?phone=5548996999796&text=${MESSAGE}`

function WhatsappSupport() {
  return (
    <a
      href={WHATS_URL}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Suporte no WhatsApp"
    >
      <img src="/assets/gift-whats.gif" alt="WhatsApp" />
    </a>
  )
}

export default WhatsappSupport



