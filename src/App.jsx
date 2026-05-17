import React, { useState } from 'react'
// Імпортуємо підключений інструмент аналітики
import posthog from 'posthog-js'

function App() {
  const [selectedSession, setSelectedSession] = useState(null)

  const handleSessionSelect = (name, characteristics) => {
    setSelectedSession({ name, details: characteristics })

    // ================= ЗМІНА 3: Кастомна бізнес-подія =================
    // Фіксуємо аналіз конкретної сесії розробником із додатковими метриками
    posthog.capture('session_selected', {
      session_name: name,
      trading_asset: 'XAUUSD', // Властивість для подальшого аналізу ринку
      is_authenticated: true   // Сегментація користувача
    })
  }

  const handleClear = () => {
    setSelectedSession(null)

    // ================= ЗМІНА 4: Друга кастомна подія =================
    // Відстежуємо дію очищення інтерфейсу (скидання стану)
    posthog.capture('session_cleared', {
      action_source: 'reset_button'
    })
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-slate-900 text-white rounded-xl shadow-md space-y-4 mt-10">
      <h1 className="text-xl font-bold text-center">Trading Sessions Dashboard</h1>
      
      <div className="flex justify-center space-x-2">
        <button 
          onClick={() => handleSessionSelect('London', 'High liquidity | Killzone')}
          className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          London
        </button>
        <button 
          onClick={() => handleSessionSelect('New York', 'Maximum volume | volatility')}
          className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition"
        >
          New York
        </button>
        <button 
          onClick={() => handleSessionSelect('Tokyo', 'Lower volatility | consolidation')}
          className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
        >
          Tokyo
        </button>
      </div>

      <div className="mt-4 p-4 bg-slate-800 rounded-md min-h-[100px] flex items-center justify-center text-center">
        {selectedSession ? (
          <div>
            <p className="font-semibold text-lg text-yellow-400">{selectedSession.name} Session</p>
            <p className="text-sm text-slate-300 mt-1">{selectedSession.details}</p>
            <button onClick={handleClear} className="mt-3 text-xs text-red-400 underline block mx-auto hover:text-red-300">
              Clear selection
            </button>
          </div>
        ) : (
          <p className="text-slate-400">Select a trading session to see details.</p>
        )}
      </div>
    </div>
  )
}

export default App