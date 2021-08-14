import asyncHandler from "express-async-handler";
import Team from "../models/teamModel.js";

// @desc    Get all team
// @route   GET /api/team
// @access  Private/Admin
const getTeam = asyncHandler(async (req, res) => {
  const team = await Team.find({});
  res.json(team);
});
// @desc    Create a team
// @route   POST /api/team
// @access  Private/Admin
const createTeam = asyncHandler(async (req, res) => {
  const { name, designation, description, twitterLink, fbLink, image } =
    req.body;
  const team = new Team({
    name,
    designation,
    description,
    twitterLink,
    fbLink,
    image,
  });
  const createdTeam = await team.save();
  res.status(201).json(createdTeam);
});
// @desc    Delete team
// @route   DELETE /api/team/:id
// @access  Private/Admin
const deleteTeam = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);

  if (team) {
    await team.remove();
    res.json({ message: "Team removed" });
  } else {
    res.status(404);
    throw new Error("Team  not found");
  }
});

// @desc    Get team by ID
// @route   GET /api/team/:id
// @access  Private/Admin
const getTeamById = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id);

  if (team) {
    res.json(team);
  } else {
    res.status(404);
    throw new Error("team not found");
  }
});

// @desc    Update team
// @route   PUT /api/team/:id
// @access  Private/Admin
const updateTeam = asyncHandler(async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    const { designation, name, description, twitterLink, fbLink, image } =
      req.body;
    if (team) {
      team.name = name;
      team.designation = designation;
      team.description = description;
      team.twitterLink = twitterLink;
      team.fbLink = fbLink;
      team.image = image;
    }
    const updatedTeam = await team.save();
    console.log(updatedTeam);
    res.status(201).send("Team Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { getTeam, deleteTeam, getTeamById, createTeam, updateTeam };
