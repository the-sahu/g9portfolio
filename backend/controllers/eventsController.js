import asyncHandler from "express-async-handler";
import Events from "../models/eventsModel.js";

// @desc    Get all events
// @route   GET /api/events
// @access  Private/Admin
const getEvents = asyncHandler(async (req, res) => {
  const events = await Events.find({});
  res.json(events);
});
// @desc    Create a product
// @route   POST /api/events
// @access  Private/Admin
const createEvents = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const { name, image } = req.body;
  const events = new Events({
    name,
    image,
  });
  const createdEvents = await events.save();
  res.status(201).json(createdEvents);
});
// @desc    Delete events
// @route   DELETE /api/events/:id
// @access  Private/Admin
const deleteEvents = asyncHandler(async (req, res) => {
  const events = await Events.findById(req.params.id);

  if (events) {
    await events.remove();
    res.json({ message: "Events removed" });
  } else {
    res.status(404);
    throw new Error("Events  not found");
  }
});

// @desc    Get events by ID
// @route   GET /api/events/:id
// @access  Private/Admin
const getEventsById = asyncHandler(async (req, res) => {
  const events = await Events.findById(req.params.id);

  if (events) {
    res.json(events);
  } else {
    res.status(404);
    throw new Error("events not found");
  }
});

// @desc    Update events
// @route   PUT /api/events/:id
// @access  Private/Admin
const updateEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Events.findById(req.params.id);
    const { image, name } = req.body;
    if (events) {
      events.name = name;
      events.image = image;
    }
    const updatedEvents = await events.save();
    console.log(updatedEvents);
    res.status(201).send("Events Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { getEvents, deleteEvents, getEventsById, createEvents, updateEvents };
