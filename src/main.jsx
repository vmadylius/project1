import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import posthog from 'posthog-js'
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "https://4af5e3ab0a9d0d89782188632d07fdb4@o4511409923620864.ingest.de.sentry.io/4511409929388112",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  environment: "development",
})

posthog.init('phc_kZGdUhatELsSuYfZNAWJL8KVSFLKJsNWzkPY7ojitrAT', {
  api_host: 'https://eu.i.posthog.com',
  person_profiles: 'identified_only',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
