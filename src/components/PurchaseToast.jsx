import React from 'react'

const FIRST_NAMES = ['Marcos', 'Aline', 'Diego', 'Fernanda', 'Paulo', 'Carla', 'Luís', 'Juliana', 'Bruno', 'Renata', 'Lucas', 'Camila', 'Rafael', 'Bianca']
const LAST_NAMES = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Lima', 'Ferreira', 'Almeida', 'Gomes', 'Ribeiro', 'Carvalho', 'Rocha', 'Barbosa', 'Dias']
const LOCATIONS = [
  'São Paulo - SP',
  'Rio de Janeiro - RJ',
  'Curitiba - PR',
  'Belo Horizonte - MG',
  'Porto Alegre - RS',
  'Salvador - BA',
  'Florianópolis - SC',
  'Recife - PE',
  'Goiânia - GO',
  'Fortaleza - CE',
  'Manaus - AM',
  'Vitória - ES',
  'Natal - RN',
  'Campo Grande - MS'
]

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function generateFullName() {
  const first = getRandomItem(FIRST_NAMES)
  const last = getRandomItem(LAST_NAMES)
  return `${first} ${last}`
}

function getInitials(fullName) {
  const parts = fullName.trim().split(/\s+/)
  const first = parts[0]?.[0] || ''
  const last = parts[parts.length - 1]?.[0] || ''
  return (first + last).toUpperCase()
}

function PurchaseToast() {
  const [visible, setVisible] = React.useState(false)
  const [name, setName] = React.useState(generateFullName())
  const [location, setLocation] = React.useState(getRandomItem(LOCATIONS))

  React.useEffect(() => {
    const showToast = () => {
      setName(generateFullName())
      setLocation(getRandomItem(LOCATIONS))
      setVisible(true)
      setTimeout(() => setVisible(false), 5000)
    }

    const initial = setTimeout(showToast, 4000)
    const interval = setInterval(showToast, 30000)
    return () => {
      clearTimeout(initial)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`purchase-toast ${visible ? 'show' : ''}`} role="status" aria-live="polite">
      <div className="purchase-toast-inner">
        <div className="purchase-toast-avatar" aria-hidden="true">{getInitials(name)}</div>
        <div className="purchase-toast-text">
          <div className="purchase-toast-name"><strong>{name}</strong> <span className="purchase-toast-loc">{location}</span></div>
          <div className="purchase-toast-msg">Acabou de comprar o curso!</div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseToast


