import React, { useEffect, useRef } from 'react'

const RESULTS_VIDEO_URL = '/assets/IMG_4892.mp4'

function ResultsVideo() {
  const resultsVideoRef = useRef(null)

  useEffect(() => {
    const videoEl = resultsVideoRef.current
    if (!videoEl) return

    videoEl.muted = true
    videoEl.defaultMuted = true
    videoEl.volume = 0
    videoEl.setAttribute('muted', 'true')

    const tryPlay = async () => {
      try {
        videoEl.muted = true
        await videoEl.play()
      } catch (err) {
        videoEl.addEventListener('canplay', async () => {
          try { 
            videoEl.muted = true
            await videoEl.play() 
          } catch (e) {}
        }, { once: true })
      }
    }

    tryPlay()
    videoEl.addEventListener('loadeddata', tryPlay, { once: true })
    videoEl.addEventListener('canplay', tryPlay, { once: true })
    videoEl.addEventListener('loadedmetadata', tryPlay, { once: true })

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Tentar após um pequeno delay para mobile
    setTimeout(tryPlay, 100)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <section className="results-video">
      <div className="container">
        <h2 className="section-title">Crie seu próprio negócio</h2>
        <p className="section-subtitle">Resultados reais, qualidade que voce vê!</p>
        <div className="results-video-wrapper">
          <video
            src={RESULTS_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            preload="auto"
            ref={resultsVideoRef}
          />
        </div>
      </div>
    </section>
  )
}

export default ResultsVideo


