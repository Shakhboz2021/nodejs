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
        console.log('Title: ' + argv.title + '\nBody: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function () {
        console.log('Removing a note')
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


