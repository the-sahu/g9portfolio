import asyncHandler from "express-async-handler";
import Hero from "../models/heroModel.js";

// @desc    Get all hero
// @route   GET /api/hero
// @access  Private/Admin
const getHero = asyncHandler(async (req, res) => {
  const hero = await Hero.find({});
  res.json(hero);
});
// @desc    Create a product
// @route   POST /api/hero
// @access  Private/Admin
const createHero = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const { heading, image, description } = req.body;
  const hero = new Hero({
    heading,
    image,
    description,
  });
  const createdHero = await hero.save();
  res.status(201).json(createdHero);
});
// @desc    Delete hero
// @route   DELETE /api/hero/:id
// @access  Private/Admin
const deleteHero = asyncHandler(async (req, res) => {
  const hero = await Hero.findById(req.params.id);

  if (hero) {
    await hero.remove();
    res.json({ message: "Hero removed" });
  } else {
    res.status(404);
    throw new Error("Hero  not found");
  }
});

// @desc    Get hero by ID
// @route   GET /api/hero/:id
// @access  Private/Admin
const getHeroById = asyncHandler(async (req, res) => {
  const hero = await Hero.findById(req.params.id);

  if (hero) {
    res.json(hero);
  } else {
    res.status(404);
    throw new Error("hero not found");
  }
});

// @desc    Update hero
// @route   PUT /api/hero/:id
// @access  Private/Admin
const updateHero = asyncHandler(async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    const { image, heading, description } = req.body;
    if (hero) {
      hero.heading = heading;
      hero.description = description;
      hero.image = image;
    }
    const updatedHero = await hero.save();
    console.log(updatedHero);
    res.status(201).send("Hero Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { getHero, deleteHero, getHeroById, createHero, updateHero };
