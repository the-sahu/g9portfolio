import mongoose from "mongoose";

const schema = mongoose.Schema;

const statsSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Stats = mongoose.model("Stats", statsSchema);
export default Stats;
