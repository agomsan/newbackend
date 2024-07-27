const artistController = {};
const { Artists } = require("../models/index");

artistController.create = async (req, res) => {
  const { name, Bio, Specialty } = req.body;

  try {
    if (!name || !Bio || !Specialty) {
      res.status(400).json({
        success: true,
        message: "Invalid Information",
      });
      return;
    }
    await Artists.create({
      name,
      Bio,
      Specialty,
    });

    res.status(200).json({
      success: true,
      message: "Artist created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating artist",
      error: error.message,
    });
  }
};

artistController.getAll = async (req, res) => {
  try {
    const artists = await Artists.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    res.status(200).json({
      success: true,
      message: "Artist retreived successfully",
      data: artists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreived artist",
      error: error.message,
    });
  }
};

artistController.getById = async (req, res) => {
  const artistId = req.params.id;

  try {
    const artist = await Artists.findByPk(artistId, {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });

   
    if (!artist) {
      res.status(404).json({
        success: true,
        message: "Artists not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: artist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreived artist",
      error: error.message,
    });
  }
};

artistController.update = async (req, res) => {
  const artistId = req.params.id;
  const artistData = req.body;

  try {
    await Artists.update(artistData, {
      where: {
        id: artistId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Artists update successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating artist",
      error: error.message,
    });
  }
};

artistController.delete = async (req, res) => {
  const artistId = req.params.id;

  try {
    const deleteResult = await Artists.destroy({
      where: {
        id: artistId,
      },
    });

    if(deleteResult === 0) {
      res.status(404).json({
        success: true,
        message: "Artist not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Artists deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting artist",
      error: error.message,
    });
  }
};

module.exports = artistController;
