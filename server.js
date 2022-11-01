const express = require('express');
const notes = require('./db/db.json'); 

const PORT = process.env.PORT || 3001;
const path = require('path'); 
const fs = require('fs'); 
const { v4: uuidv4 } = require('uuid'); 
const e = require('express');
const app = express(); 


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); 

app.use(express.json()); 


const addNewNote = newNote => {
  console.log(newNote, "body crossed over to NEW NOTE FUNC");

  
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      const parsedNotesArr = JSON.parse(data);

      
      parsedNotesArr.push(newNote);

      
      fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(parsedNotesArr, null, 2)
      );
      return parsedNotesArr;
    }
  });
};



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
  
  const newNote = {
    title,
    text,
    
    id: uuidv4()
  }
  
 
  const returnedNote = addNewNote(newNote);
  res.json(returnedNote);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});