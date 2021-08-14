import asyncHandler from "express-async-handler";
import Stats from "../models/statsModel.js";

// @desc    Get all stats
// @route   GET /api/stats
// @access  Private/Admin
const getStats = asyncHandler(async (req, res) => {
  const stats = await Stats.find({});
  res.json(stats);
});
// @desc    Create a stats
// @route   POST /api/stats
// @access  Private/Admin
const createStats = asyncHandler(async (req, res) => {
  const { title, number } = req.body;
  const stats = new Stats({
    title,
    number,
  });
  const createdStats = await stats.save();
  res.status(201).json(createdStats);
});
// @desc    Delete stats
// @route   DELETE /api/stats/:id
// @access  Private/Admin
const deleteStats = asyncHandler(async (req, res) => {
  const stats = await Stats.findById(req.params.id);

  if (stats) {
    await stats.remove();
    res.json({ message: "Stats removed" });
  } else {
    res.status(404);
    throw new Error("Stats  not found");
  }
});

// @desc    Get stats by ID
// @route   GET /api/stats/:id
// @access  Private/Admin
const getStatsById = asyncHandler(async (req, res) => {
  const stats = await Stats.findById(req.params.id);

  if (stats) {
    res.json(stats);
  } else {
    res.status(404);
    throw new Error("stats not found");
  }
});

// @desc    Update stats
// @route   PUT /api/stats/:id
// @access  Private/Admin
const updateStats = asyncHandler(async (req, res) => {
  try {
    const stats = await Stats.findById(req.params.id);
    const { number, title } = req.body;
    if (stats) {
      stats.title = title;
      stats.number = number;
    }
    const updatedStats = await stats.save();
    console.log(updatedStats);
    res.status(201).send("Stats Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { getStats, deleteStats, getStatsById, createStats, updateStats };
