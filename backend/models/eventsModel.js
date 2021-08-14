import mongoose from "mongoose";

const schema = mongoose.Schema;

const eventsSchema = new schema(
  {
    coverImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", eventsSchema);
export default Events;
