console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = function(){
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch(e) {
    return [];
  }
}

var saveNotes = function(notes){
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = function(title, body){
  console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = function(){
  console.log('Getting all notes');
  return fetchNotes();
}

var getNote = function(title){
  console.log('Reading a note');
  //console.log(title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title === title;
  });
  return filteredNotes[0];
}

var removeNote = function(title){
  console.log('Removing a note');
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote
};
