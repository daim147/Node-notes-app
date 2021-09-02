const fs = require("fs");
const chalk = require("chalk");

const notes = fs.readFileSync(`./notes.json`, "utf-8");
let notesArray = JSON.parse(notes);

const getNotes = () => {
  console.log(chalk.greenBright.inverse.bold("YOUR NOTES"));
  console.log(chalk.greenBright.bold(notes));
};

// ! UPDATE NOTES
const updateNotes = () => {
  fs.writeFileSync(`${__dirname}/notes.json`, JSON.stringify(notesArray));
};

// ! ADD NOTES
const addNotes = (title, body) => {
  notesArray.push({ title, body });
  console.log(chalk.whiteBright.greenBright.inverse.bold("NOTE ADDED"));
  updateNotes();
};

// ! Remove NOTES
const removeNotes = (title) => {
  notesArray = notesArray.filter((obj) => obj.title !== title);
  console.log(chalk.redBright.bgGrey.inverse.bold("NOTE REMOVED"));
  updateNotes();
};

//! READ NOTE
const readNote = (title) => {
  console.log(chalk.greenBright.inverse.bold("YOUR SPECIFIC NOTE"));
  console.log(
    chalk.greenBright.bold(
      JSON.stringify(notesArray.find((obj) => obj.title === title))
    )
  );
};

module.exports = {
  addNotes,
  removeNotes,
  getNotes,
  readNote,
};
