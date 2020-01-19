const program = require("commander");
const { prompt } = require("inquirer");

const Collection = require("./services/Collection");
const Record = require("./services/Record");

const colectionQuestions = {
  type: "input",
  name: "name",
  message: "Collection Name"
};


const recordQuestions = [
  {
    type: "input",
    name: "collection",
    message: "Collection Name"
  },
  {
    type: "input",
    name: "key",
    message: "Enter Field Key"
  },
  {
    type: "input",
    name: "value",
    message: "Enter Filed Value"
  }
];

const deleteQuestions = [
  {
    type: "input",
    name: "collection",
    message: "Collection Name"
  },
  {
    type: "input",
    name: "value",
    message: "Enter value"
  }
];
const findQuestions = [
  {
    type: "input",
    name: "collection",
    message: "Collection Name"
  },
  {
    type: "input",
    name: "value",
    message: "Enter value"
  }
];

program.version("1.0.0").description("Cli tool");

program
  .command("create-collection")
  .alias("cc")
  .description("Create a new collection")
  .action(() => {
    prompt(colectionQuestions).then(answers => Collection.create(answers.name));
  });

program
  .command("add-record")
  .alias("add")
  .description("Add a record")
  .action(() => {
    prompt(recordQuestions).then(answers => Record.insert(answers));
  });

program
  .command("delete-record")
  .alias("del")
  .description("Delete a record")
  .action(() => {
    prompt(deleteQuestions).then(answers => Record.delete(answers));
  });

program
  .command("find-record")
  .alias("find")
  .description("Find record")
  .action(() => {
    prompt(findQuestions).then(answers => Record.find(answers));
  });

program.parse(process.argv);
