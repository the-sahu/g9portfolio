// @desc    Get
// @route   GET /
// @access  public
const homePage = (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
};
// @desc    Get
// @route   GET /about
// @access  public
const aboutPage = (req, res) => {
  res.render("about", { title: "Hey", message: "Hello there!" });
};

export { homePage, aboutPage };
