import React from 'react'

// Vídeo movido para o Hero

function Content() {
  return (
    <section id="conteudo" className="content">
      <div className="container">
        <div className="content-grid">
          <div className="content-copy">
        <h2 className="section-title">Conteúdo do curso</h2>
            <p className="content-description">
              Do básico ao avançado, com foco em procedimento, consistência e eficiência: você aprende o que
              realmente importa para executar com segurança e entregar um acabamento profissional.
            </p>
            <ul className="content-list">
              <li>Preparação do ambiente, limpeza e setup das ferramentas</li>
              <li>Corte, encolhimento e aplicação com padronização de etapas</li>
              <li>Aplicação sem desmontagem: técnicas para preservar forros e acabamentos</li>
              <li>Boas práticas de atendimento e posicionamento do serviço</li>
            </ul>
          </div>
          <aside className="content-aside">
            <div className="content-card">
              <div className="content-card-head">O que está incluído</div>
              <ul className="info-list">
                <li><span className="info-ico">🎥</span><span>Aulas em vídeo sob demanda</span></li>
                <li><span className="info-ico">💬</span><span>Suporte para dúvidas</span></li>
                <li><span className="info-ico">📄</span><span>Materiais para download</span></li>
                <li><span className="info-ico">🔁</span><span>Atualizações de conteúdo</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Content


