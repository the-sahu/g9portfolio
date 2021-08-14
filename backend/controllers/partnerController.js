import asyncHandler from "express-async-handler";
import Partner from "../models/partnerModel.js";

// @desc    Get all partner
// @route   GET /api/partner
// @access  Private/Admin
const getPartner = asyncHandler(async (req, res) => {
  const partner = await Partner.find({});
  res.json(partner);
});
// @desc    Create a product
// @route   POST /api/partner
// @access  Private/Admin
const createPartner = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const { name, image } = req.body;
  const partner = new Partner({
    name,
    image,
  });
  const createdPartner = await partner.save();
  res.status(201).json(createdPartner);
});
// @desc    Delete partner
// @route   DELETE /api/partner/:id
// @access  Private/Admin
const deletePartner = asyncHandler(async (req, res) => {
  const partner = await Partner.findById(req.params.id);

  if (partner) {
    await partner.remove();
    res.json({ message: "Partner removed" });
  } else {
    res.status(404);
    throw new Error("Partner  not found");
  }
});

// @desc    Get partner by ID
// @route   GET /api/partner/:id
// @access  Private/Admin
const getPartnerById = asyncHandler(async (req, res) => {
  const partner = await Partner.findById(req.params.id);

  if (partner) {
    res.json(partner);
  } else {
    res.status(404);
    throw new Error("partner not found");
  }
});

// @desc    Update partner
// @route   PUT /api/partner/:id
// @access  Private/Admin
const updatePartner = asyncHandler(async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    const { image, name } = req.body;
    if (partner) {
      partner.name = name;
      partner.image = image;
    }
    const updatedPartner = await partner.save();
    console.log(updatedPartner);
    res.status(201).send("Partner Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getPartner,
  deletePartner,
  getPartnerById,
  createPartner,
  updatePartner,
};
