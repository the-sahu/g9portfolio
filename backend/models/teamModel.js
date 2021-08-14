import mongoose from "mongoose";

const schema = mongoose.Schema;

const teamSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    twitterLink: {
      type: String,
      required: true,
    },
    fbLink: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);
export default Team;
