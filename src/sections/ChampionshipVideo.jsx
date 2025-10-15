import React, { useEffect, useRef } from 'react'

const CHAMPIONSHIP_VIDEO_URL = '/assets/video-camp.mp4'

function ChampionshipVideo() {
  const campVideoRef = useRef(null)

  useEffect(() => {
    const videoEl = campVideoRef.current
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

    attemptPlay()
    videoEl.addEventListener('loadeddata', attemptPlay, { once: true })
    videoEl.addEventListener('canplay', attemptPlay, { once: true })
    videoEl.addEventListener('loadedmetadata', attemptPlay, { once: true })

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') attemptPlay()
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
    }
  }, [])

  return (
    <section className="championship-video">
      <div className="container">
        <h2 className="section-title">Destaque em campeonatos</h2>
        <div className="championship-video-wrapper">
          <video
            src={CHAMPIONSHIP_VIDEO_URL}
            autoPlay
            loop
            muted
            controls
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            preload="auto"
            ref={campVideoRef}
          />
        </div>
        <h3 style={{ marginTop: 24, marginBottom: 0, fontSize: '20px', color: '#9aa4b2' }}>
          Reconhecimento em pódio que valida método, técnica e consistência.
        </h3>
      </div>
    </section>
  )
}

export default ChampionshipVideo
