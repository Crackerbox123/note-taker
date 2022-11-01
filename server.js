const express = require('express');// require JSON file

const PORT = process.env.PORT || 3001;
const path = require('path'); 
const fs = require('fs'); 
const app = express(); 

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); 

app.use(express.json()); 


const addNewNote = (body, notesArr) => {
  console.log(body, "body in NEW NOTE FUNC");
  console.log(notesArr, "DB / notes array");
}



app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/notes', (req, res) => {
  
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  console.log({ title }, "logged destructured title in POST method");
  
  const newNote = {
    title,
    text,
    
    id: "123456789"
  }
  
  const returnedNote = addNewNote(newNote, notes);
  
 
  res.json(returnedNote);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});