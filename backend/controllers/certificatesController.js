import asyncHandler from "express-async-handler";
import Certificates from "../models/certificatesModel.js";

// @desc    Get all certificates
// @route   GET /api/certificates
// @access  Private/Admin
const getCertificates = asyncHandler(async (req, res) => {
  const certificates = await Certificates.find({});
  res.json(certificates);
});
// @desc    Create a product
// @route   POST /api/certificates
// @access  Private/Admin
const createCertificates = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const { image } = req.body;
  const certificates = new Certificates({
    image,
  });
  const createdCertificates = await certificates.save();
  res.status(201).json(createdCertificates);
});
// @desc    Delete certificates
// @route   DELETE /api/certificates/:id
// @access  Private/Admin
const deleteCertificates = asyncHandler(async (req, res) => {
  const certificates = await Certificates.findById(req.params.id);

  if (certificates) {
    await certificates.remove();
    res.json({ message: "Certificates removed" });
  } else {
    res.status(404);
    throw new Error("Certificates  not found");
  }
});

// @desc    Get certificates by ID
// @route   GET /api/certificates/:id
// @access  Private/Admin
const getCertificatesById = asyncHandler(async (req, res) => {
  const certificates = await Certificates.findById(req.params.id);

  if (certificates) {
    res.json(certificates);
  } else {
    res.status(404);
    throw new Error("certificates not found");
  }
});

// @desc    Update certificates
// @route   PUT /api/certificates/:id
// @access  Private/Admin
const updateCertificates = asyncHandler(async (req, res) => {
  try {
    const certificates = await Certificates.findById(req.params.id);
    const { image, name } = req.body;
    if (certificates) {
      certificates.name = name;
      certificates.image = image;
    }
    const updatedCertificates = await certificates.save();
    console.log(updatedCertificates);
    res.status(201).send("Certificates Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getCertificates,
  deleteCertificates,
  getCertificatesById,
  createCertificates,
  updateCertificates,
};
