const express = require('express');
const { notes } = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express(); 
const fs = require('fs'); 
const path = require('path'); 


app.use(express.static('public'));


app.post('/api/notes', (req, res) => {
 
})


app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// get the homepage for the server to display INDEX.HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});