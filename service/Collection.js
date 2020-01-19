const fs = require("fs");
const collectionsDir = "./collections";

const Collection = {
  _createCollectionDir() {
    if (!fs.existsSync(collectionsDir)) {
      fs.mkdirSync(collectionsDir, () => {
        console.log("collection dir created!");
      });
    }
  },

  _checkIfCollectionExists(fileName) {
    if (fs.existsSync(`${collectionsDir}/${fileName}.json`)) {
      console.log("collection already exists.");
      return;
    }
  },

  create(fileName) {
    console.log("create collction from collection service");

    this._createCollectionDir();
    this._checkIfCollectionExists(fileName);
    fs.open(`${collectionsDir}/${fileName}.json`, "w", function(err, file) {
      if (err) throw err;
      console.log("Collection created!");
    });
  }
};
module.exports = Collection;
