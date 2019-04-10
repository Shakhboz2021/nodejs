const notes = require('./notes');
const yargs = require('yargs');
const validator = require('validator');
const chalk = require('chalk');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
      title: {
          describe: 'note title',
          demandOption: true,
          type: 'string'
      }
    },
    handler: function (argv) {
       notes.removeNote(argv.title)
    }
});

yargs.command({
    command: 'list',
    describe: 'lists note names',

    handler: function () {
        console.log('Listing all note names')
    }
});

yargs.parse();


