export default async function handler(req, res) {
  const { url } = req.query;
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}
