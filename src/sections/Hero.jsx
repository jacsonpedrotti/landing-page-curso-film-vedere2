import React, { useEffect, useRef, useState } from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || 'https://pay.hotmart.com/N101809353Q?checkoutMode=2&off=lnqqh9tv'
const PRESENTIAL_MESSAGE = encodeURIComponent('Olá, tenho interesse no seu curso PRESENCIAL, poderia me informar mais sobre o conteúdo?')
const PRESENTIAL_WHATS_URL = `https://api.whatsapp.com/send/?phone=5548996999796&text=${PRESENTIAL_MESSAGE}`
const HERO_VIDEO_URL = '/assets/video-hero.mp4'

function Hero() {
  const heroVideoRef = useRef(null)
  const [showUnmuteHint, setShowUnmuteHint] = useState(false)

  useEffect(() => {
    const videoEl = heroVideoRef.current
    if (!videoEl) return

    // Configurações para autoplay em todos os dispositivos
    videoEl.muted = true
    videoEl.defaultMuted = true
    videoEl.volume = 0
    
    // Tentar play imediatamente
    const tryPlay = async () => {
      try {
        await videoEl.play()
      } catch (err) {
        // Se falhar, tentar novamente quando o vídeo estiver pronto
        videoEl.addEventListener('canplay', async () => {
          try {
            await videoEl.play()
          } catch (e) {}
        }, { once: true })
      }
    }

    // Tentar play em diferentes momentos
    tryPlay()
    
    // Tentar novamente quando carregar
    videoEl.addEventListener('loadeddata', tryPlay, { once: true })
    videoEl.addEventListener('canplay', tryPlay, { once: true })
    
    // Tentar quando a página ficar visível
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        tryPlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-title">
          <h1><span className="u-title-underline">Curso profissional em aplicação de películas automotivas</span></h1>
        </div>
        <div className="hero-copy">
          <p>
            Programa completo, do básico ao avançado, com foco em técnicas replicáveis, acabamento consistente e fluxo de trabalho eficiente — sem desmontagem de forros ou acabamentos. Conteúdo objetivo, aplicável no dia a dia, para quem está começando ou já atua na área.
          </p>
          <p>
            Com o nosso curso, você adquire uma habilidade para entrar no mercado — como uma primeira renda ou quem deseja sair do Brasil já com uma fonte de renda. É uma das profissões mais bem pagas, chegando a R$ 1.000,00 por hora de aplicação. Quanto melhores forem seus resultados, melhor será seu posicionamento no mercado — cobre pelo seu serviço com confiança.
          </p>
          <div className="hero-ctas">
            <a href={PAYMENT_URL} className="btn btn-primary hotmart-fb hotmart__button-checkout">Inscreva-se</a>
            <a href="#conteudo" className="btn btn-secondary">Ver conteúdo</a>
          </div>
          <div className="hero-cards-row">
            <div className="card card-hero pro is-accent">
              <div className="pro-head">
                <span className="pro-badge">🚀 Curso 100% online</span>
                <span className="pro-sub">Acesso vitalício</span>
              </div>
              <div className="pro-body">
                <ul className="pro-list">
                  <li><span className="pro-icon">🎯</span><span>Comece seu próprio negócio</span></li>
                  <li><span className="pro-icon">📦</span><span>Materiais para download</span></li>
                  <li><span className="pro-icon">💬</span><span>Suporte para dúvidas</span></li>
                </ul>
                <div className="pro-price"><span className="label">Por apenas</span><span className="amount">R$ 297,00</span></div>
                <a href={PAYMENT_URL} className="btn btn-primary pro-cta hotmart-fb hotmart__button-checkout" style={{ fontSize: '18px', padding: '16px 24px' }}>Comprar curso online</a>
                <div className="pro-meta"><span>🔒 Garantia de 7 dias</span><span>♾️ Acesso ilimitado</span></div>
              </div>
            </div>
            <div className="card card-hero pro is-accent">
              <div className="pro-head">
                <span className="pro-badge">🎧 Suporte personalizado</span>
                <span className="pro-sub">Mais informações via WhatsApp</span>
              </div>
              <div className="pro-body">
                <ul className="pro-list">
                  <li><span className="pro-icon">🧑‍🏫</span><span>Atendimento 1:1 com especialista</span></li>
                  <li><span className="pro-icon">🧩</span><span>Esclarecimento de dúvidas avançadas</span></li>
                  <li><span className="pro-icon">🗓️</span><span>Agendamento flexível</span></li>
                </ul>
                <div className="pro-price"><span className="label">Canal</span><span className="amount">WhatsApp</span></div>
                <a href={PRESENTIAL_WHATS_URL} className="btn btn-whatsapp pro-cta" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', padding: '16px 24px' }}>💬 Falar no WhatsApp</a>
                <div className="pro-meta"><span>⏱️ Resposta rápida</span><span>📎 Envio de mídia</span></div>
              </div>
            </div>
          </div>
        </div>
        <aside className="hero-card">
          <div className="hero-video">
            <div className="video-wrapper">
              <video
                src={HERO_VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                ref={heroVideoRef}
                webkit-playsinline="true"
                x5-playsinline="true"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero



