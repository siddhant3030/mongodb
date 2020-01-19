const fs = require("fs");
const _ = require("lodash");
const collectionsDir = "./collections";

const Record = {
  insert(data) {
    console.log("Record::insert::Data", data);

    let obj = {};
    obj[data.key] = data.value;
    fs.writeFile(
      `${collectionsDir}/${data.collection}.json`,
      JSON.stringify(obj),
      err => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log("Record Added!");
      }
    );
  },

  delete(data) {
    console.log("Record::delete::Data", data);
    const obj = JSON.parse(
      fs.readFileSync(`${collectionsDir}/${data.collection}.json`, "utf8")
    );
    console.log("obj", obj);
    for (var f in obj) {
      if (obj[f] == data.value) {
        delete obj[f];
      }
    }

    fs.writeFile(
      `${collectionsDir}/${data.collection}.json`,
      JSON.stringify(obj),
      err => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log("Record deleted!");
      }
    );
  },

  find(data) {
    // console.log("Record::find::Data", data);
    const obj = JSON.parse(
      fs.readFileSync(`${collectionsDir}/${data.collection}.json`, "utf8")
    );

    for (var f in obj) {
      if (obj[f] == data.value) {
        console.log(obj)
        console.log("record found")
        return;
      }
    }
    console.log("record not found")
  }
};
module.exports = Record;
