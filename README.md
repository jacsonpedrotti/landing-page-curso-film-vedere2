# Landing Page - Curso de Películas (React + Vite)

Projeto em React (JavaScript) criado com Vite para landing page do curso de instalação de películas residenciais e automotivas.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Configurar link de pagamento

Crie um arquivo `.env` na raiz com:

```bash
VITE_PAYMENT_URL=https://seu-link-de-pagamento-aqui
```

Os botões de CTA usam essa variável.

## Estrutura

- `src/modules/App.jsx`: composição das seções
- `src/sections/*`: `Header`, `Hero`, `Content`, `Features`, `Testimonials`, `FAQ`, `CTA`, `Footer`
- `src/styles/global.css`: estilos globais e layout

## Próximos passos

- Inserir mídias (logos, imagens, vídeos)
- Ajustar textos e depoimentos reais
- Configurar analytics e pixel se necessário
