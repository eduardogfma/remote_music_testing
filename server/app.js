const fs = require("fs");
const express = require("express");
const app = express();
const updateMusicLibrary = require("./system/walk");

const musicFolder = "/home/eduardo/Music/";
const validFileExtensions = [".mp3", ".flac", ".ape"];
const libFilePath = "./db/musicLibrary.json";
let lib = [];

fs.stat(libFilePath, async (err, stats) => {
  if (stats && stats.isFile()) {
    console.log("Loading music library");

    const data = fs.readFileSync(libFilePath, "utf8");
    lib = JSON.parse(data);

    console.log("Music library loaded successully");
  } else {
    updateMusicLibrary(
      musicFolder,
      validFileExtensions,
      libFilePath
    );
  }
});

app.get("/", (req, res) => {
  console.log("New connection");
  res.send("Hello");
});

app.get("/library", (req, res) => {
  res.send(lib);
});

app.get("/library/update", (req, res) => {
  updateMusicLibrary(
    musicFolder,
    validFileExtensions,
    libFilePath
  );
  res.send({msg: "Updating library..."});
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
