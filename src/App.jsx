import { useState } from 'react'

function App() {
  const badgeStyle = {
  display: 'inline-block',
  padding: '5px 12px',
  borderRadius: '15px',
  fontSize: '14px',
  fontWeight: 'bold',
  backgroundColor: import.meta.env.VITE_APP_STATUS === 'Development' ? '#ff9900' : '#00ff88',
  color: '#000000',
  marginTop: '5px',
  marginBottom: '15px'
  }
  const [sessionInfo, setSessionInfo] = useState('Select a trading session to see details.')

const displaySession = (session) => {
    if (session === 'London') {
      setSessionInfo('🇬🇧 London Session: High liquidity. Focuses on the initial London Killzone. Major moves and expansion of the daily Dealing Range on EURUSD and Gold (XAUUSD).')
    } else if (session === 'New York') {
      setSessionInfo('🇺🇸 New York Session: Maximum volume and heavy volatility expansion. High-impact news releases heavily influence the NY Killzone and define the final daily range.')
    } else if (session === 'Tokyo') {
      setSessionInfo('🇯🇵 Tokyo (Asian) Session: Lower volatility and stable consolidation. Forms the initial Asian Dealing Range, which acts as a benchmark for London stop hunts.')
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
      <h1>Trading Sessions Dashboard</h1>
      <div style={badgeStyle}>{import.meta.env.VITE_APP_STATUS}</div>
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