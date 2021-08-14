import mongoose from "mongoose";

const schema = mongoose.Schema;

const certificatesSchema = new schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Certificates = mongoose.model("Certificates", certificatesSchema);
export default Certificates;
