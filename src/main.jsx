import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './modules/App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)








