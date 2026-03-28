'use strict';

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',     (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/info', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'info.html')));
app.get('/ping', (_req, res) => res.json({ ok: true, ts: Date.now() }));

app.get('/profile.jpeg', (_req, res) => res.sendFile(path.join(__dirname, 'profile.jpeg')));

app.use((_req, res) => res.status(404).sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => {
  console.log(`Daniel Portfolio → http://localhost:${PORT}`);
});
