import asyncHandler from "express-async-handler";
import sendEmail from "../utils/sendEmail.js";
// @desc    Update team
// @route   PUT /api/team/:id
// @access  Private/Admin
const sendContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const Mailmessage = `
      <h4>Name: ${name} </h4>
      <h4>Mobile: ${mobile} </h4>
      <h4>Email: ${email} </h4>
      <h4>Message: ${message} </h4>
  `;

    try {
      const mailSent = await sendEmail({
        to: process.env.emailTo,
        subject: `Contact - ${name}`,
        text: Mailmessage,
      });
      return res.status(200).send({
        success: true,
        message:
          "Thank You For Sharing Your Details With Us We Will Contact You Soon.",
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { sendContact };