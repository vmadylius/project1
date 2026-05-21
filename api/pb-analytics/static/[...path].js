export default async function handler(req, res) {
  const path = req.url.replace('/api/pb-analytics/static', '/static') || '/static'
  const url = `https://eu.i.posthog.com${path}`

  const response = await fetch(url, {
    method: req.method,
    headers: {
      'user-agent': req.headers['user-agent'] || '',
      host: 'eu.i.posthog.com',
    },
  })

  const data = await response.text()
  res.status(response.status)
    .setHeader('content-type', response.headers.get('content-type') || 'application/javascript')
    .send(data)
}