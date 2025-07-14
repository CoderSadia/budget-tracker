const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
  const transactions = db.prepare('SELECT * FROM transactions ORDER BY date DESC').all();
  res.json(transactions);
});

router.post('/', (req, res) => {
  const { title, amount, date } = req.body;
  const stmt = db.prepare('INSERT INTO transactions (title, amount, date) VALUES (?, ?, ?)');
  const result = stmt.run(title, amount, date);
  res.json({ id: result.lastInsertRowid });
});

router.delete('/:id', (req, res) => {
  db.prepare('DELETE FROM transactions WHERE id = ?').run(req.params.id);
  res.sendStatus(204);
});

module.exports = router;

