import mongoose from "mongoose";

const schema = mongoose.Schema;

const newsSchema = new schema(
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

const News = mongoose.model("News", newsSchema);
export default News;
