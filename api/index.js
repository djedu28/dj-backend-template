const app = require('express')();
const { v4 } = require('uuid');
const api = require('./api.js');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// Rotas
app.use("/api/pong", (req, res) => {
    res.json({ "pint": "pong" });
});

app.use("/api",api)

module.exports = app;
