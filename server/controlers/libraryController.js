const libraryController = (req, res) => {
  try {
    // 1. Decide what to do...

    // x. Send result
    res.status(200).send({msg: "Library here"});
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports = libraryController;
