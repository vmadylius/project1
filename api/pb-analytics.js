export default async function handler(req, res) {
  // Витягуємо шлях після /api/pb-analytics
  const path = req.url.replace('/api/pb-analytics', '') || '/'

  const url = `https://eu.i.posthog.com${path}`

  const response = await fetch(url, {
    method: req.method,
    headers: {
      'content-type': req.headers['content-type'] || 'application/json',
      'user-agent': req.headers['user-agent'] || '',
      host: 'eu.i.posthog.com',
    },
    body: req.method !== 'GET' && req.method !== 'HEAD'
      ? JSON.stringify(req.body)
      : undefined,
  })

  const data = await response.text()

  res.status(response.status).send(data)
}