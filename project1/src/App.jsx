import { useState } from 'react'

function App() {
  const [sessionInfo, setSessionInfo] = useState('Select a trading session to see details.')

  const displaySession = (session) => {
    if (session === 'London') {
      setSessionInfo('🇬🇧 London Session: High liquidity and volatility. Major moves on EURUSD and Gold (XAUUSD).')
    } else if (session === 'New York') {
      setSessionInfo('🇺🇸 New York Session: Maximum volume. News releases create heavy impulses and high volatility.')
    } else if (session === 'Tokyo') {
      setSessionInfo('🇯🇵 Tokyo (Asian) Session: Lower volatility, stable ranges. Ideal for yen pairs and consolidation.')
    }
  }

  // Стилі для гарного темного інтерфейсу
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px'
  }

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#1f1f1f',
    color: '#00ff88',
    border: '2px solid #00ff88',
    borderRadius: '5px',
    transition: '0.3s'
  }

  const boxStyle = {
    marginTop: '30px',
    padding: '20px',
    border: '1px solid #333',
    borderRadius: '8px',
    maxWidth: '500px',
    fontSize: '18px',
    backgroundColor: '#1a1a1a',
    lineHeight: '1.5'
  }

  return (
    <div style={containerStyle}>
      <h1>Варіант від Другої Гілки</h1>
      <p>Click a button to analyze session characteristics:</p>
      
      <div>
        <button style={buttonStyle} onClick={() => displaySession('London')}>London</button>
        <button style={buttonStyle} onClick={() => displaySession('New York')}>New York</button>
        <button style={buttonStyle} onClick={() => displaySession('Tokyo')}>Tokyo</button>
      </div>

      <div style={boxStyle}>
        <p>{sessionInfo}</p>
      </div>
    </div>
  )
}

export default App