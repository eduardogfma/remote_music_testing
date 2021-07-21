const musicFolder = "/home/eduardo/Music/";
const validFileExtensions = [".mp3", ".flac", ".ape"];
const libFilePath = "./db/musicLibr2ary.json";
const updateMusicLibrary = require("./walk copy");

const x = async () => {
  const lib = await updateMusicLibrary(
    musicFolder,
    validFileExtensions,
    libFilePath
  );

  console.log("Example");
  console.log(lib[0]);
};

x();
