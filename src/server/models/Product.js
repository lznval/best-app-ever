import mongoose from "mongoose";

const ProductTagsSchema = new mongoose.Schema({
  tag: String,
});

const ProductPhotosSchema = new mongoose.Schema({
  photo: String,
});

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tags: {
      type: [ProductTagsSchema],
      required: true,
    },
    photos: {
      type: [ProductPhotosSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
