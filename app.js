// const chalk = require("chalk");
// const validator = require("validator");
const yargs = require("yargs");
const { addNotes, removeNotes, getNotes, readNote } = require("./notes");

// ! ADDING A NOTE
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Title of new note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of new note",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title, body }) {
    addNotes(title, body);
  },
});

// ! REMOVING A NOTE
yargs.command({
  command: "remove",
  describe: "Remove a note",

  handler({ title }) {
    removeNotes(title);
  },
});

// ! READ A NOTE
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of note to read",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title }) {
    readNote(title);
  },
});

//  ! LIST NOTES
yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    getNotes();
  },
});

yargs.parse();
