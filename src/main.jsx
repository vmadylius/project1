import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import posthog from 'posthog-js'
import * as Sentry from "@sentry/react" // Імпортуємо Sentry під React



posthog.init('phc_kZGdUhatELsSuYfZNAWJL8KVSFLKJsNWzkPY7ojitrAT', {
  api_host: '/ingest', 
  person_profiles: 'identified_only',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)