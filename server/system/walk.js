const walk = require("walk");
const mm = require("music-metadata");
const path = require("path");
const writeJsonFile = require("./writeFile");

const updateMusicLibrary = async (
  folder,
  validExtensions,
  libFilePath
) => {
  const lib = [];

  options = {
    followLinks: false,
    // directories with these keys will be skipped
    filters: ["Temp", "_Temp"],
  };

  const walker = walk.walk(folder, options);

  // walker.on("names", function (root, fileStats, next) {
  //   console.log(fileStats);
  //   next();
  // });

  // walker.on("directory", function (root, dirStats, next) {
  //   console.log(dirStats);
  //   next();
  // });

  walker.on("file", async (root, fileStat, next) => {
    const fileName = fileStat.name;
    if (
      validExtensions.some((extension) =>
        fileName.includes(extension)
      )
    ) {
      const filePath = path.join(root, fileStat.name);
      const metadata = await mm.parseFile(filePath);

      lib.push({
        artist: metadata.common.artist,
        album: metadata.common.album,
        title: metadata.common.title,
        path: filePath,
        metadata: metadata.common,
      });
    }
    next();
  });

  walker.on(
    "errors",
    function (root, nodeStatsArray, next) {
      console.log(nodeStatsArray);
      next();
    }
  );

  walker.on("end", function () {
    console.log(
      "Music library has been successfully mapped"
    );
    writeJsonFile(libFilePath, lib);
  });
};

module.exports = updateMusicLibrary;
