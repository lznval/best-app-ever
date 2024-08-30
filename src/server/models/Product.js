import mongoose from 'mongoose';
import { type } from 'os';

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
    categories: {
      type: [String],
      required: true,
    },
    photos: [String],
    viewsCount: {
      type: Number,
      default: 0,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: Number,
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Product', ProductSchema);
