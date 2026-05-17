import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Імпортуємо аналітику
import posthog from 'posthog-js' // [cite: 144]

// Активуємо трекінг перед рендером інтерфейсу
posthog.init('phc_kZGdUhatELsSuYfZNAWJL8KVSFLKJsNWzkPY7ojitrAT', { // [cite: 145]
  api_host: 'https://eu.posthog.com',           // [cite: 146]
  person_profiles: 'identified_only',             // [cite: 147]
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
