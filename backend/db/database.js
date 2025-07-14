const Database = require('better-sqlite3');
const db = new Database('budget.db');

// Create table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL
  )
`).run();

module.exports = db;


