const fs = require("fs");

const writeJsonFile = (outputFilePath, dataObject) => {
  fs.writeFile(
    outputFilePath,
    JSON.stringify(dataObject),
    (err) => {
      if (err) throw err;

      console.log(
        "The file has bee saved at " + outputFilePath
      );
    }
  );
};

module.exports = writeJsonFile;
