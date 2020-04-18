const express = require('express')
const app = express()
const port = 3000


const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write()

app.get('/', (req, res) => res.send('Reinstall Ubuntu'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))