import React, { useEffect, useRef } from 'react'

const INTRO_VIDEO_URL = '/assets/video-intro-vedere.mp4'

function DifferentialVideo() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const videoEl = videoRef.current
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

    // Auto play quando a seção entrar na viewport
    const observedEl = sectionRef.current || videoEl
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          tryPlay()
        } else {
          try { videoEl.pause() } catch (e) {}
        }
      })
    }, { threshold: [0, 0.25, 0.5, 1] })
    observer.observe(observedEl)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
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
            preload="metadata"
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


