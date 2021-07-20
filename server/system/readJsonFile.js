const fs = require("fs");

const readJsonFile = async (inputFilePath, obj) => {
  console.log("Reading " + inputFilePath);
  let x = {};
  fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) throw err;

    console.log("Reading " + inputFilePath);

    x = JSON.parse(data);

    console.log("File successfully read");
  });

  return x;
};

module.exports = readJsonFile;
