import mongoose from "mongoose";

const schema = mongoose.Schema;

const collaboratorSchema = new schema(
  {
    name: {
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

const Collaborator = mongoose.model("Collaborator", collaboratorSchema);
export default Collaborator;
