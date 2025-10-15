import React, { useEffect, useRef } from 'react'

const INTRO_VIDEO_URL = '/assets/video-intro-vedere.mp4'

function DifferentialVideo() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // Configurações agressivas para autoplay em mobile
    videoEl.muted = true
    videoEl.defaultMuted = true
    videoEl.volume = 0
    videoEl.setAttribute('muted', 'true')
    videoEl.setAttribute('autoplay', 'true')
    videoEl.setAttribute('playsinline', 'true')

    const tryPlay = async () => {
      try {
        videoEl.muted = true
        videoEl.volume = 0
        await videoEl.play()
      } catch (err) {
        videoEl.addEventListener('touchstart', async () => {
          try {
            videoEl.muted = true
            await videoEl.play()
          } catch (e) {}
        }, { once: true })
      }
    }

    // Múltiplas tentativas com delays diferentes
    const attemptPlay = () => {
      tryPlay()
      setTimeout(tryPlay, 50)
      setTimeout(tryPlay, 100)
      setTimeout(tryPlay, 200)
      setTimeout(tryPlay, 500)
    }

    // Auto play quando a seção entrar na viewport
    const observedEl = sectionRef.current || videoEl
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          attemptPlay()
        } else {
          try { videoEl.pause() } catch (e) {}
        }
      })
    }, { threshold: [0, 0.25, 0.5, 1] })
    observer.observe(observedEl)

    // Tentar quando a página ficar visível
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        attemptPlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Tentar quando o usuário interagir
    const handleUserInteraction = () => {
      attemptPlay()
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }
    document.addEventListener('touchstart', handleUserInteraction)
    document.addEventListener('click', handleUserInteraction)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
      try { observer.disconnect() } catch (e) {}
    }
  }, [])

  return (
    <section className="results-video" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nosso diferencial</h2>
        <p className="section-subtitle">Acabamento de corte preciso e aplicação sem remoção de acabamentos.</p>
        <div className="results-video-wrapper">
          <video
            src={INTRO_VIDEO_URL}
            autoPlay
            loop
            muted
            controls
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            preload="auto"
            ref={videoRef}
          />
        </div>
        <p className="section-subtitle" style={{ marginTop: 12 }}>
          Menos desmontagem, mais eficiência e acabamento consistente no dia a dia.
        </p>
      </div>
    </section>
  )
}

export default DifferentialVideo


