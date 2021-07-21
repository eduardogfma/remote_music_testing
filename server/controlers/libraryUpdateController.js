const libraryUpdatecontroller = async (req, res) => {
  try {
    // 1. Update DB info
    // await updateMusicLibrary

    // 2. Send result
    res.status(200).send({msg: "Library updated"});
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports = libraryUpdatecontroller;
