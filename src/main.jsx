import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Імпортуємо аналітику PostHog [cite: 144]
import posthog from 'posthog-js'

// Активуємо трекінг перед рендером інтерфейсу [cite: 145]
posthog.init('phc_kZGdUhatELsSuYfZNAWJL8KVSFLKJsNWzkPY7ojitrAT', {
  api_host: 'https://eu.posthog.com', // [cite: 146]
  person_profiles: 'identified_only', // [cite: 147]
})

// Єдиний правильний рендер застосунку
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)