import asyncHandler from "express-async-handler";
import SuperstarDonar from "../models/superstarDonarModel.js";

// @desc    Get all superstarDonar
// @route   GET /api/superstarDonar
// @access  Private/Admin
const getSuperstarDonar = asyncHandler(async (req, res) => {
  const superstarDonar = await SuperstarDonar.find({});
  res.json(superstarDonar);
});
// @desc    Create a superstarDonar
// @route   POST /api/superstarDonar
// @access  Private/Admin
const createSuperstarDonar = asyncHandler(async (req, res) => {
  const { name, designation, description, twitterLink, fbLink, image } =
    req.body;
  const superstarDonar = new SuperstarDonar({
    name,
    designation,
    description,
    twitterLink,
    fbLink,
    image,
  });
  const createdSuperstarDonar = await superstarDonar.save();
  res.status(201).json(createdSuperstarDonar);
});
// @desc    Delete superstarDonar
// @route   DELETE /api/superstarDonar/:id
// @access  Private/Admin
const deleteSuperstarDonar = asyncHandler(async (req, res) => {
  const superstarDonar = await SuperstarDonar.findById(req.params.id);

  if (superstarDonar) {
    await superstarDonar.remove();
    res.json({ message: "SuperstarDonar removed" });
  } else {
    res.status(404);
    throw new Error("SuperstarDonar  not found");
  }
});

// @desc    Get superstarDonar by ID
// @route   GET /api/superstarDonar/:id
// @access  Private/Admin
const getSuperstarDonarById = asyncHandler(async (req, res) => {
  const superstarDonar = await SuperstarDonar.findById(req.params.id);

  if (superstarDonar) {
    res.json(superstarDonar);
  } else {
    res.status(404);
    throw new Error("superstarDonar not found");
  }
});

// @desc    Update superstarDonar
// @route   PUT /api/superstarDonar/:id
// @access  Private/Admin
const updateSuperstarDonar = asyncHandler(async (req, res) => {
  try {
    const superstarDonar = await SuperstarDonar.findById(req.params.id);
    const { designation, name, description, twitterLink, fbLink, image } =
      req.body;
    if (superstarDonar) {
      superstarDonar.name = name;
      superstarDonar.designation = designation;
      superstarDonar.description = description;
      superstarDonar.twitterLink = twitterLink;
      superstarDonar.fbLink = fbLink;
      superstarDonar.image = image;
    }
    const updatedSuperstarDonar = await superstarDonar.save();
    console.log(updatedSuperstarDonar);
    res.status(201).send("SuperstarDonar Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getSuperstarDonar,
  deleteSuperstarDonar,
  getSuperstarDonarById,
  createSuperstarDonar,
  updateSuperstarDonar,
};
