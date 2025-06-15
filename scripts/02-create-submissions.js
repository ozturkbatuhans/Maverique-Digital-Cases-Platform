const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("./data/cases.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    createdAt TEXT
  )
`);

console.log("Tabel aangemaakt!");