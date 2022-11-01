const express = require('express');
const { notes } = require('./db/db.json'); 

const PORT = process.env.PORT || 3001;
const app = express(); 
const fs = require('fs'); 
const path = require('path'); 







app.get('/api/db', (req, res) => {
  res.json(notes);
})


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});