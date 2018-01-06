console.log('starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log(command);
// console.log(argv);

var logNote = function(note){
  if(note){
    console.log(`note found!`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else{
    console.log('note not found');
  }
}

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  logNote(note);
} else if(command === 'list'){
  var results = notes.getAll();
  console.log(`Printing ${results.length} notes`);
  if(results.length !== 0){
    for(var r in results){
      console.log(`Title: ${results[r].title}`);
      console.log(`Body: ${results[r].body}`);
      console.log('---');
    }
  }
  else{
    console.log('no note found!');
  }
} else if(command === 'read'){
  var note = notes.getNote(argv.title);
  logNote(note);
} else if(command === 'remove') {
  var removeFlag = notes.removeNote(argv.title);
  var message = removeFlag ? 'Note was removed' : 'Note not found';
  console.log(message);
} else{
  console.log('command not defined');
}
