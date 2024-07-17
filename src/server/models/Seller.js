import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'seller'
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Seller", SellerSchema);
