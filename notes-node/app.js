console.log('starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of a note',
  demand: true,
  alias: 't'
};

const bodyOption = {
  describe: 'Body of a note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Add a note', {
  title: titleOption,
  body: bodyOption
})
.command('list', 'List all the notes')
.command('read', 'read the note with title', {
  title: titleOption
})
.command('remove', 'remove the note with title', {
  title: titleOption
})
.help()
.argv;
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
