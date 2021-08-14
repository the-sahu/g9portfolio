import mongoose from "mongoose";

const schema = mongoose.Schema;

const partnersSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    // files: [Object]
  },
  { timestamps: true }
);

const Partner = mongoose.model("Partner", partnersSchema);
export default Partner;
