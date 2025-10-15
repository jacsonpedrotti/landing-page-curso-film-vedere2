import React, { useEffect, useRef } from 'react'

const CHAMPIONSHIP_VIDEO_URL = '/assets/video-camp.mp4'

function ChampionshipVideo() {
  const campVideoRef = useRef(null)

  useEffect(() => {
    const videoEl = campVideoRef.current
    if (!videoEl) return

    videoEl.muted = true
    videoEl.defaultMuted = true
    videoEl.volume = 0

    const tryPlay = async () => {
      try {
        await videoEl.play()
      } catch (err) {
        videoEl.addEventListener('canplay', async () => {
          try { await videoEl.play() } catch (e) {}
        }, { once: true })
      }
    }

    tryPlay()
    videoEl.addEventListener('loadeddata', tryPlay, { once: true })
    videoEl.addEventListener('canplay', tryPlay, { once: true })

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
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
