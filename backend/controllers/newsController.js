import asyncHandler from "express-async-handler";
import News from "../models/newsModel.js";

// @desc    Get all news
// @route   GET /api/news
// @access  Private/Admin
const getNews = asyncHandler(async (req, res) => {
  const news = await News.find({});
  res.json(news);
});
// @desc    Create a product
// @route   POST /api/news
// @access  Private/Admin
const createNews = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const { name, image } = req.body;
  const news = new News({
    name,
    image,
  });
  const createdNews = await news.save();
  res.status(201).json(createdNews);
});
// @desc    Delete news
// @route   DELETE /api/news/:id
// @access  Private/Admin
const deleteNews = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);

  if (news) {
    await news.remove();
    res.json({ message: "News removed" });
  } else {
    res.status(404);
    throw new Error("News  not found");
  }
});

// @desc    Get news by ID
// @route   GET /api/news/:id
// @access  Private/Admin
const getNewsById = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);

  if (news) {
    res.json(news);
  } else {
    res.status(404);
    throw new Error("news not found");
  }
});

// @desc    Update news
// @route   PUT /api/news/:id
// @access  Private/Admin
const updateNews = asyncHandler(async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    const { image, name } = req.body;
    if (news) {
      news.name = name;
      news.image = image;
    }
    const updatedNews = await news.save();
    console.log(updatedNews);
    res.status(201).send("News Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { getNews, deleteNews, getNewsById, createNews, updateNews };
