import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import posthog from 'posthog-js'
import * as Sentry from "@sentry/react" // Імпортуємо Sentry під React

// ================= ІНІЦІАЛІЗАЦІЯ SENTRY (ЛАБА №6) =================
// Тепер змінна Sentry використовується, і лінтер буде задоволений!
Sentry.init({
  dsn: "https://o4511409923620864.ingest.de.sentry.io/api/4511409929388112/integration/otlp", // Тимчасовий або твій реальний DSN
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  environment: "development",
})

// ================= ІНІЦІАЛІЗАЦІЯ POSTHOG (ЛАБА №5) =================
posthog.init('phc_kZGdUhatELsSuYfZNAWJL8KVSFLKJsNWzkPY7ojitrAT', {
  api_host: '/ingest',
  person_profiles: 'identified_only',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)