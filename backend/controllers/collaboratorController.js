import asyncHandler from "express-async-handler";
import Collaborator from "../models/collaboratorModel.js";

// @desc    Get all collaborator
// @route   GET /api/collaborator
// @access  Private/Admin
const getCollaborator = asyncHandler(async (req, res) => {
  const collaborator = await Collaborator.find({});
  res.json(collaborator);
});
// @desc    Create a product
// @route   POST /api/collaborator
// @access  Private/Admin
const createCollaborator = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const { name, image } = req.body;
  const collaborator = new Collaborator({
    name,
    image,
  });
  const createdCollaborator = await collaborator.save();
  res.status(201).json(createdCollaborator);
});
// @desc    Delete collaborator
// @route   DELETE /api/collaborator/:id
// @access  Private/Admin
const deleteCollaborator = asyncHandler(async (req, res) => {
  const collaborator = await Collaborator.findById(req.params.id);

  if (collaborator) {
    await collaborator.remove();
    res.json({ message: "Collaborator removed" });
  } else {
    res.status(404);
    throw new Error("Collaborator  not found");
  }
});

// @desc    Get collaborator by ID
// @route   GET /api/collaborator/:id
// @access  Private/Admin
const getCollaboratorById = asyncHandler(async (req, res) => {
  const collaborator = await Collaborator.findById(req.params.id);

  if (collaborator) {
    res.json(collaborator);
  } else {
    res.status(404);
    throw new Error("collaborator not found");
  }
});

// @desc    Update collaborator
// @route   PUT /api/collaborator/:id
// @access  Private/Admin
const updateCollaborator = asyncHandler(async (req, res) => {
  try {
    const collaborator = await Collaborator.findById(req.params.id);
    const { image, name } = req.body;
    if (collaborator) {
      collaborator.name = name;
      collaborator.image = image;
    }
    const updatedCollaborator = await collaborator.save();
    console.log(updatedCollaborator);
    res.status(201).send("Collaborator Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getCollaborator,
  deleteCollaborator,
  getCollaboratorById,
  createCollaborator,
  updateCollaborator,
};
