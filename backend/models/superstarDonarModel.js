import mongoose from "mongoose";

const schema = mongoose.Schema;

const superstarDonarSchema = new schema(
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

const SuperstarDonar = mongoose.model("SuperstarDonar", superstarDonarSchema);
export default SuperstarDonar;
