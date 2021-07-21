require("dotenv/config");
const express = require("express");
const routes = require("./routes");
const app = express();
const serverPort = process.env.API_PORT;

// const fs = require("fs");
// const updateMusicLibrary = require("./system/walk");

const musicFolder = process.env.MUSIC_FOLDER;
const validFileExtensions =
  process.env.VALID_FILE_EXTENSIONS.split(","); // [".mp3", ".flac", ".ape"];
const libFilePath = "./db/musicLibrary.json";
// let lib = [];

// fs.stat(libFilePath, async (err, stats) => {
//   if (stats && stats.isFile()) {
//     console.log("Loading music library");

//     const data = fs.readFileSync(libFilePath, "utf8");
//     lib = JSON.parse(data);

//     console.log("Music library loaded successully");
//   } else {
//     updateMusicLibrary(
//       musicFolder,
//       validFileExtensions,
//       libFilePath
//     );
//   }
// });

app.get("/", (req, res) => {
  console.log("New connection");
  res.send("Hello");
});

// Routes
// ---------------------------------------------------------------
app.use("/library", routes.library);

// app.get("/library/update", (req, res) => {
//   updateMusicLibrary(
//     musicFolder,
//     validFileExtensions,
//     libFilePath
//   );
//   res.send({msg: "Updating library..."});
// });

// Server listening
// ---------------------------------------------------------------
app.listen(serverPort, () => {
  console.log("Server listening on port " + serverPort);
});
