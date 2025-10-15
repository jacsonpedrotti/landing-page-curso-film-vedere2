import React from 'react'

const RESULTS_VIDEO_URL = '/assets/IMG_4892.mp4'

function ResultsVideo() {
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
          />
        </div>
      </div>
    </section>
  )
}

export default ResultsVideo


