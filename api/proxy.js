export default async function handler(req, res) {
  const target = 'https://eu.i.posthog.com'
  const path = req.url.replace('/api/proxy', '') || '/'
  const url = `${target}${path}`

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        'content-type': req.headers['content-type'] || 'application/json',
        'user-agent': req.headers['user-agent'] || '',
        'host': 'eu.i.posthog.com',
      },
      body: req.method !== 'GET' && req.method !== 'HEAD'
        ? JSON.stringify(req.body)
        : undefined,
    })
    const contentType = response.headers.get('content-type') || 'text/plain'
    const data = await response.text()
    res.status(response.status).setHeader('content-type', contentType).send(data)
  } catch (err) {
    res.status(500).send('Proxy error: ' + err.message)
  }
}
